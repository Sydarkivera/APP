# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-06-25 08:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_process_progress'),
    ]

    operations = [
        migrations.AlterField(
            model_name='module',
            name='filter',
            field=models.CharField(blank=True, default='*', max_length=200),
        ),
        migrations.AlterField(
            model_name='module',
            name='python_module',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
