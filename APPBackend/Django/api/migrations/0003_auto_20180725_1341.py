# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-07-25 13:41
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20180725_1331'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='roles',
        ),
        migrations.DeleteModel(
            name='Role',
        ),
    ]
