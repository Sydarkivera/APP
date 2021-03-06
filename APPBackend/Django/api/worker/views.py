__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2018, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.http import HttpResponse, JsonResponse, StreamingHttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import Permission
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from api.models import Module, Package, Process, Template, Variable, Job
from api.serializers import *
from api.tasks import executeProcessFlow
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from api.tasks import executeProcessFlow, finishPackage
from django.core.files.base import ContentFile, File
from django.utils.six import b, BytesIO
import json
from config.settings import BASE_DIR
from django.utils.encoding import smart_str
import datetime

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
import tarfile
from api.worker.helper import send_request
from api.helper import fixCommand, get_values, AnalyseLog, errorHappend
from api.tasks import finishSuccessfulRun, executeProcessFlow
import docker

from logging import getLogger
logger = getLogger('django')


@api_view(['PUT'])
@permission_classes((AllowAny, ))
def result(request):
    if request.method == 'PUT':
        logger.info("start_result_from_worker")
        # check and validate result
        if 'file_id' not in request.data:
            logger.warn("file_id missing in request.data")
            return HttpResponse("Missing file_id in request body", status=400)

        fileModel = get_object_or_404(FileModel, pk=request.data['file_id'])
        process = get_object_or_404(Process, pk=request.data['process_id'])
        container_id = request.data['container_id']
        # container_name = request.data['container_name']
        # logger.info(job)
        # process = job.process
        # allFiles = process.allFiles

        logger.info(request.data)

        # get logger for file in package
        processLogger = getLogger('background_task.' + 
        process.module.name + str(process.package.package_id))

        # save the results to the database
        if 'stderr' in request.data and request.data['stderr'] != "":
            # allFiles[job.file_index]['status'] = False

            fileModel.status = FileModel.FILEMODEL_STATUS_ERROR
            fileModel.save()
            processLogger.error(request.data['stderr'])
            with open(process.err_path, 'a+') as f:
                f.write(request.data['stderr'])
            errorDict = {}
            errorDict['file'] = fileModel.name
            errorDict['log'] = request.data['stderr']
            process.errors.append(errorDict)
            process.save()
            errorHappend(fileModel.name)
        else:
            if 'stdout' in request.data:
                # status_ok = True
                res, log = AnalyseLog(process.module.resultFilter, request.data['stdout'])
                if res == -1:
                    # allFiles[job.file_index]['status'] = False
                    processLogger.error(request.data['stdout'])
                    with open(process.err_path, 'a+') as f:
                        f.write(request.data['stdout'])
                    fileModel.status = FileModel.FILEMODEL_STATUS_ERROR
                    fileModel.save()
                    errorDict = {}
                    errorDict['file'] = fileModel.name
                    errorDict['log'] = request.data['stdout']
                    process.errors.append(errorDict)
                    process.save()
                    errorHappend(fileModel.name)
                    # status_ok = False

                else:
                    with open(process.log_path, 'a+') as f:
                        f.write(request.data['stdout'])
                    processLogger.info(request.data['stdout'])
                    fileModel.status = FileModel.FILEMODEL_STATUS_COMPLETE
                    fileModel.save()
                    # allFiles[job.file_index]['status'] = True
                    process.logs.append({'file': fileModel.name, 'log': request.data['stdout']})
            else:
                process.logs.append({'file': fileModel.name, 'log': ''})
                fileModel.status = FileModel.FILEMODEL_STATUS_COMPLETE
                fileModel.save()


        # calculate progressbar
        numCompleted = FileModel.objects.filter(process=process).exclude(status=FileModel.FILEMODEL_STATUS_NOT_STARTED).count()
        numTotal = FileModel.objects.filter(process=process).count()
        process.progress = (numCompleted) / numTotal * 100
        process.save()

        # test if done or should abort

        if process.status == process.PROCESS_STATUS_ABORTED or process.package.status == Package.PACKAGE_STATUS_ABORTED:
            logger.info('Package is aborted')
            close_container(container_id)
            return JsonResponse({"done": True, "aborted": True}, status=200)
    
        if FileModel.objects.filter(process=process).filter(status=FileModel.FILEMODEL_STATUS_NOT_STARTED).count() == 0:
            logger.info('Package is completed')
            close_container(container_id)

            # if all containers are closed, mark process as finished and continue:
            remainingContainers = Container.objects.filter(process=process).count()
            if remainingContainers == 0:
                finishSuccessfulRun(process)
                # start next process:
                executeProcessFlow.delay(process.package.package_id)
            # process.status = Process.PROCESS_STATUS_DONE
            # process.end_time = datetime.datetime.now()
            # process.save()
            # process.package.status = Package.PACKAGE_STATUS_DONE
            # process.package.save()
            return JsonResponse({"done": True, "aborted": True}, status=200)


        # find next filename

        nextFile = FileModel.objects.filter(process=process).filter(status=FileModel.FILEMODEL_STATUS_NOT_STARTED)[0]
        nextFile.status = FileModel.FILEMODEL_STATUS_STARTED
        nextFile.save()

        # get values        

        values = get_values(process, process.package)
        if 'workdir' in values:
            relative = os.path.relpath(values['workdir'], process.package.workdir)
            values['workdir'] = os.path.join(
                process.module.dockerImage.mountpoint, relative)
        relative = os.path.relpath(nextFile.name, process.package.workdir)
        values['file'] = os.path.join(
            process.module.dockerImage.mountpoint, relative)


        # get the command for this file

        command = fixCommand(process, values)
        command_string = ' '.join(command)

        # start command
        data = {}
        data['command'] = command_string
        data['process_id'] = process.process_id
        data['file_name'] = nextFile.name
        data['file_id'] = nextFile.id
        data['container_id'] = container_id

        logger.info("return_result_from_worker")
        
        return JsonResponse(data, status=200)

def close_container(container_id):

    # get container:
    # logger.info(container_id)
    client = docker.from_env()
    containerObject = Container.objects.get(pk=container_id)
    # logger.info()
    logger.info("close_container" + containerObject.name + "-" + str(containerObject.iteration))

    try:
        container = client.containers.get(containerObject.name + "-" + str(containerObject.iteration))
        try:
            container.stop()
            container.wait(timeout=60)
        except requests.exceptions.ReadTimeout:
            container.kill()
        container.remove()
    except docker.errors.NotFound:
        # container does not exist, run it
        logger.error("trying to delete a docker container that does not exist")
    containerObject.delete()
    # delete job.
    # job.delete()
