__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2018, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.http import HttpResponse, JsonResponse, StreamingHttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from api.models import Module, Package, Process, Template, Variable
from api.serializers import *
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from api.tasks import executeProcessFlow, finishPackage
from django.core.files.base import ContentFile, File
from django.utils.six import b, BytesIO
import json
from config.settings import BASE_DIR

import os
import pwd
from os import listdir
from os.path import isfile, join
from django.conf import settings
import subprocess
import shutil
import tarfile
from io import UnsupportedOperation
import time
import docker # for docker
from docker import APIClient
import tempfile

from logging import getLogger
logger = getLogger('django')

@api_view(['GET', 'PUT'])
def module_list(request):
    """
    List all modules, or create a new module.
    """
    if request.method == 'GET':
        modules = Module.objects.all()
        serializer = ModuleSerializer(modules, many=True)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ModuleSerializer(data=request.data, partial=True)
        if serializer.is_valid():

            tools_path = Variable.objects.get(name="tools_path").data
            fName = serializer.validated_data['name'].replace(' ', '_')
            #check if a tool folder can be created
            folderName = os.path.join(tools_path, fName)
            logger.info(folderName)
            if not os.path.isdir(folderName):
                os.makedirs(folderName)
                serializer.validated_data['tool_folder_name'] = fName
            else:
                return Response('A tool with that name already exists. Please name it something else', status=status.HTTP_400_BAD_REQUEST)


            # TODO: Check if the file exists if it is a python module, or validate the command more exactly
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def module_import(request):
    """
    unpack imported module and add it to the system
    """
    file = request.FILES['file']

    tar = tarfile.open(fileobj=file)
    tar_list = tar.getnames()
    if 'data.json' in tar_list:
        jsonFO = tar.extractfile('data.json')
        data = jsonFO.read()
        jsonData = json.loads(data.decode("utf-8"))
        dockerData = {}
        if 'dockerImage' in jsonData and jsonData['dockerImage']:
            dockerData = jsonData['dockerImage']
            dockerData['label'] = jsonData['dockerImage']['label']
            del jsonData['dockerImage']
        if 'module_id' in jsonData:
            del jsonData['module_id']


        # change the name if it already exists
        if Module.objects.filter(name=jsonData['name']).exists():
            i = 1
            # jsonData['name'] += ' ' + 1
            newName = jsonData['name'] + ' ' + str(i)
            while Module.objects.filter(name=newName).exists():
                i+= 1
                newName = jsonData['name'] + ' ' + str(i)

            jsonData['name'] = newName

        serializer = ModuleExportSerializer(data=jsonData, partial=True)

        if serializer.is_valid():
            module = serializer.save()
            # create the folder if there are not already on present. 
            if os.path.isdir(os.path.join(BASE_DIR, 'tools/', module.tool_folder_name)):
                # find a different name and save it to the module
                i = 1
                newDir = os.path.join(BASE_DIR, 'tools/', module.tool_folder_name) + '_' + str(i)
                while os.path.isdir(newDir):
                    i+= 1
                    newDir = os.path.join(BASE_DIR, 'tools/', module.tool_folder_name) + '_' + str(i)

                module.tool_folder_name = newDir
                module.save()

            # create dir
            os.mkdir(module.tool_folder_name)

            # add all the other files TODO
            for fileName in tar_list:
                if fileName != 'data.json':
                    # new file found, load it and store it in the folder
                    tar.extract(fileName, path=os.path.join(module.tool_folder_name, fileName))
        else:
            logger.error('Failed to serialize imported module: ' + serializer.errors)
    tar.close()

    #return list of all tools:
    modules = Module.objects.all()
    serializer = ModuleSerializer(modules, many=True)
    return Response(serializer.data)

@api_view(['POST', 'DELETE'])
def module(request, module_id):
    """
    Handle module edits
    """
    module = get_object_or_404(Module, pk=module_id)
    if request.method == 'POST':
        # logger.info(request.data)
        # logger.info(request.data['resultFilter'])
        # request.data['resultFilter'] = json.dumps(request.data['resultFilter'])
        serializer = ModuleSerializer(module, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        if not module.processes.all().exists():
            # delete folder
            tools_path = Variable.objects.get(name="tools_path").data
            folderName = os.path.join(tools_path, module.tool_folder_name)
            if os.path.isdir(folderName):
                shutil.rmtree(folderName)
            module.delete()
            return HttpResponse(status=200)
        else:
            processes = module.processes.all()
            res = ""
            t = []
            p = []
            for process in processes:
                # logger.info(process.template)
                # logger.info(process.package)
                if process.template != None:
                    t.append(process.template)
                elif process.package != None:
                    p.append(process.package)

            res = "The tool could not be removed since it is in use by "

            if len(t) > 0:
                res += "templates: "
                for template in t:
                    res += '"' + template.name + '", '
                res = res[:-2]
                res += " and"

            if len(p) > 0:
                res += " packages: "
                for package in p:
                    res += '"' + package.name + '", '
                res = res[:-2]
            else:
                res = res[:-4]

            res += "."

            return HttpResponse(res, status=409)

@api_view(['GET'])
@permission_classes((AllowAny, ))
def module_export(request, module_id):
    """
    Export all data in the module as a tar file.
    """
    module = get_object_or_404(Module, pk=module_id)
    serializer = ModuleExportSerializer(module)


    files = []
    files.append(ContentFile(b(json.dumps(serializer.data)), name="data.json"))

    # independent of module type, the whole folder should be copied.
    folder_path = os.path.join(BASE_DIR, 'tools/', module.tool_folder_name)
    for file in os.listdir(folder_path):
        files.append(File(open(os.path.join(folder_path, file)), name=file))


    temp_file = tempfile.TemporaryFile()
    with tarfile.TarFile(fileobj=temp_file, mode='w', debug=3) as tar_file:
        for file_ in files:
            file_name = file_.name
            try:
                data = file_.read()
            except UnicodeDecodeError:
                # logger.error("unicode decode error")
                data = open(file_.file.name, 'rb').read()
                pass
            file_.seek(0, os.SEEK_SET)
            size = len(data)
            try:
                if isinstance(data, bytes):
                    lol = BytesIO(data)
                else:
                    lol = BytesIO(data.encode())
            except UnicodeDecodeError:
                # logger.error("unicode decode error 2")
                pass
            try:
                info = tar_file.gettarinfo(fileobj=file_)
            except UnsupportedOperation:
                info = tarfile.TarInfo(name=file_name)
            info.size = size
            tar_file.addfile(tarinfo=info, fileobj=lol)

        # a docker tarball if present:
        # if module.type == Module.MODULE_TYPE_SMART_DOCKER:
        #     image_name = module.dockerImage.name
        #     logger.info(image_name)
        #     client = docker.from_env()
        #     logger.info(client)
        #     cli = APIClient(base_url='unix://var/run/docker.sock')
        #     image = cli.get_image(image_name)
        #
        #     # info = tarfile.TarInfo((image_name + ".tar"))
        #     # data = b""
        #     with tempfile.NamedTemporaryFile() as f:
        #         logger.info('begining reading')
        #         s = 0
        #         for chunk in image:
        #             # logger.info(chunk)
        #             # data += chunk
        #             s += len(chunk)
        #             f.write(chunk)
        #         logger.info('done with docker')
        #         info = tar_file.gettarinfo(fileobj=f)
        #         # data = f.read()
        #         # logger.info(len(data))
        #         # logger.info(s)
        #         f.seek(0)
        #         info.size = s
        #         info.name = image_name + ".tar"
        #         tar_file.addfile(tarinfo=info, fileobj=f)


    file_size = temp_file.tell()
    temp_file.seek(0)

    response = HttpResponse(temp_file, content_type='application/x-tar')
    response['Content-Disposition'] = 'attachment; filename=\"' + module.name + '.tar\"'
    response['Content-Length'] = file_size
    temp_file.close()
    return response
    # def get_files(self):
    #     # for i in range(0,10):
    #     yield ContentFile(b(json.dumps(serializer.data)), name="data.json")
    #         # yield file_like
    #


@api_view(['GET', 'DELETE', 'PUT', 'POST'])
def module_files(request, module_id):
    """
    All functions for handling the filebrowser ui when creating a new module/tool
    """
    logger.info('modules files')
    module = get_object_or_404(Module, pk=module_id)
    tools_path = Variable.objects.get(name="tools_path").data
    specific_path = request.GET.get('path', '')
    if request.method == 'GET':
        # possibly also download file/directory
        # logger.info(module.tool_folder_name)
        folderName = os.path.join(tools_path, module.tool_folder_name, specific_path)
        if 'download' in request.GET:
            if os.path.exists(folderName):
                if os.path.isfile(folderName):
                    with open(folderName, 'rb') as fh:
                        response = HttpResponse(fh.read(), content_type='application/force-download')
                        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(folderName)
                        return response
                else:
                    return downloadFolderAsTar(folderName)
        else:
            return JsonResponse(getFilesAtPath(folderName), safe=False)
    elif request.method == 'DELETE':
        # delete either the file of folder at GET['path']
        folderName = os.path.join(tools_path, module.tool_folder_name, specific_path)
        if os.path.exists(folderName):
            if os.path.isdir(folderName):
                shutil.rmtree(folderName)
            else:
                os.remove(folderName)

            # return updated folder:
            newPath, _  = os.path.split(folderName)
            return JsonResponse(getFilesAtPath(newPath), safe=False)
        else:
            return Response("the file does not exist", status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'POST':
        # file upload. save the file/files at POST['path']
        file = request.FILES['file']
        newPath = os.path.join(tools_path, module.tool_folder_name, request.data['path'])
        logger.info(request.data['path'])
        logger.info(newPath)
        #verify that newPath doesn't exist
        if not os.path.exists(newPath):
            with open(newPath, 'wb+') as destination:
                for chunk in file.chunks():
                    destination.write(chunk)

        else:
            return Response("The path does already exist: " + newPath, status=status.HTTP_400_BAD_REQUEST)
        logger.info(newPath)
        p, _ = os.path.split(newPath)
        logger.info(p)
        return JsonResponse(getFilesAtPath(p), safe=False)

    elif request.method == 'PUT':
        path = os.path.join(tools_path, module.tool_folder_name, request.data['path'])

        if os.path.exists(path):
            newName = request.data['name']
            head, tail = os.path.split(request.data['path'])
            newName = os.path.join(head, newName)
            newPath = os.path.join(tools_path, module.tool_folder_name, newName)
            shutil.move(path, newPath)
            return JsonResponse(getFilesAtPath(os.path.join(tools_path, module.tool_folder_name, head)), safe=False)
        else:
            #create folder if the file did not exist.
            os.mkdir(path)
            p, _ = os.path.split(path)
            return JsonResponse(getFilesAtPath(p), safe=False)

    return HttpResponse(status=200)




# ------------- (( Helper functions )) ------------- #

def getFilesAtPath(path):
    res = []
    for f in os.listdir(path):
        ff = os.path.join(path, f)
        if os.path.isdir(ff):
            res.append({"type": "folder", "name": f})
            # logger.info("folder: " + f)
        else:
            res.append({"type": "file", "name": f})
            # logger.info("file: " + f)
    return res

def downloadFolderAsTar(path):
    temp_file = ContentFile(b(""), name=os.path.basename(path) + '.tar')
    with tarfile.TarFile(fileobj=temp_file, mode='w', debug=3) as tar_file:
        tar_file.add(path, arcname=os.path.basename(path))
    file_size = temp_file.tell()
    temp_file.seek(0)

    response = HttpResponse(temp_file, content_type='application/x-tar')
    response['Content-Disposition'] = 'attachment; filename=\"' + os.path.basename(path) + '.tar\"'
    response['Content-Length'] = file_size
    return response
