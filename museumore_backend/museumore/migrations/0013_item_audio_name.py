# Generated by Django 4.1.4 on 2023-03-09 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museumore', '0012_targetfile'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='audio_name',
            field=models.TextField(blank=True),
        ),
    ]
