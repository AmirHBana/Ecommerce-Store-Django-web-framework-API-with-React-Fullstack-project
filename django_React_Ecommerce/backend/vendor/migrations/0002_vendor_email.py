# Generated by Django 4.2.9 on 2024-06-09 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='vendor',
            name='email',
            field=models.EmailField(blank=True, help_text='Shop Email', max_length=100, null=True),
        ),
    ]
