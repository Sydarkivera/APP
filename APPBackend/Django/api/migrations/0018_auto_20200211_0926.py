# Generated by Django 2.2 on 2020-02-11 09:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_auto_20200204_1507'),
    ]

    operations = [
        migrations.AddField(
            model_name='process',
            name='end_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='process',
            name='start_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
