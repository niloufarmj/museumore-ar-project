# Generated by Django 4.1.4 on 2023-02-28 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museumore', '0005_alter_item_target_image_alter_item_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='target_data',
            field=models.JSONField(default=''),
        ),
    ]
