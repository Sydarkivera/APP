# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-07-02 14:11
from __future__ import unicode_literals

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_auto_20180628_0651'),
    ]

    operations = [
        migrations.AddField(
            model_name='process',
            name='errors',
            field=jsonfield.fields.JSONField(default=[]),
        ),
    ]