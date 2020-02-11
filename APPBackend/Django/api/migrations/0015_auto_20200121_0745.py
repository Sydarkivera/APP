# Generated by Django 2.2 on 2020-01-21 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_auto_20200114_0837'),
    ]

    operations = [
        migrations.AlterField(
            model_name='module',
            name='hidden',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='package',
            name='status',
            field=models.IntegerField(choices=[(0, 'New'), (1, 'Waiting'), (2, 'Running'), (3, 'Error'), (4, 'Done'), (5, 'Edited'), (6, 'Finished'), (7, 'Paused')], default=0),
        ),
        migrations.AlterField(
            model_name='process',
            name='status',
            field=models.IntegerField(choices=[(0, 'New'), (1, 'Waiting'), (2, 'Running'), (3, 'Error'), (4, 'Done'), (5, 'Paused'), (6, 'Edited'), (7, 'Paused')], default=0),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='last name'),
        ),
    ]