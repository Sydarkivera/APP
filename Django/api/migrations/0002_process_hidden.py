# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-06-19 12:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='process',
            name='hidden',
            field=models.BooleanField(default=False),
        ),
    ]
