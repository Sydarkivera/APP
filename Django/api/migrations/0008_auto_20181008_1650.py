# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-10-08 16:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20181002_2026'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='container_iteration',
            field=models.IntegerField(default=2),
        ),
        migrations.AddField(
            model_name='job',
            name='container_name',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
