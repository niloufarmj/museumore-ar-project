# Generated by Django 4.1.4 on 2023-02-28 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museumore', '0006_item_target_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='target_data',
            field=models.JSONField(default=dict),
        ),
    ]
