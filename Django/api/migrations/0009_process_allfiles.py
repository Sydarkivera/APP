# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-06-26 05:38
from __future__ import unicode_literals

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_module_resultfilter'),
    ]

    operations = [
        migrations.AddField(
            model_name='process',
            name='allFiles',
            field=jsonfield.fields.JSONField(default=[]),
        ),
    ]