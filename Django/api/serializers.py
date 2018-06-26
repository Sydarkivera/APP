__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from rest_framework import serializers
from api.models import Module, Package, Process
import json



class TypeSerializer(serializers.Field):

    def to_representation(self, obj):
        for var in Module.MODULE_TYPES:
            if var[0] == obj:
                return var[1]
        # return Module.MODULE_TYPES[obj][1]
        return "Not found"

    def to_internal_value(self, data):
        for var in Module.MODULE_TYPES:
            if var[1] == data:
                return var[0]
        return 0
        # return {k:v for v,k in Module.MODULE_TYPES.items()}[data]

class JSONSerializerField(serializers.Field):
    """ Serializer for JSONField -- required to make field writable"""
    def to_internal_value(self, data):
        return data
    def to_representation(self, value):
        return value

class ProcessSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='module.name', read_only=True)
    hidden = serializers.BooleanField(source='module.hidden', read_only=True)
    type = TypeSerializer(source='module.type', read_only=True)
    form = JSONSerializerField(source='module.form', read_only=True)
    value = JSONSerializerField(required=False)
    status = serializers.SerializerMethodField()
    module = serializers.PrimaryKeyRelatedField(queryset=Module.objects.all())
    package = serializers.PrimaryKeyRelatedField(queryset=Package.objects.all())
    filter = serializers.CharField(source='module.filter', read_only=True)

    class Meta:
        model = Process
        fields = ('process_id', 'order', 'name', 'type', 'form', 'value', 'status', 'log_path', 'err_path', 'module', 'package', 'hidden', 'filter', 'progress')

    def get_status(self,obj):
        return obj.get_status_display()

class PackageSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField()

    class Meta:
        model = Package
        fields = ('package_id', 'name', 'path', 'file_name', 'status')

    def get_status(self,obj):
        return obj.get_status_display()

class PackageDetailSerializer(serializers.ModelSerializer):
    processes = ProcessSerializer(many=True)
    statistics = JSONSerializerField(required=True)

    class Meta:
        model = Package
        fields = ('package_id', 'name', 'file_name', 'status', 'processes', 'statistics')


class ModuleSerializer(serializers.ModelSerializer):
    form = JSONSerializerField()
    command = JSONSerializerField()
    type = TypeSerializer()
    resultFilter = JSONSerializerField()

    class Meta:
        model = Module
        fields = ('module_id', 'name', 'type', 'form', 'python_module', 'command', 'hidden', 'filter', 'resultFilter')

    def get_type(self,obj):
        return obj.get_type_display()
