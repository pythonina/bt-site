# Generated by Django 4.1.7 on 2023-03-17 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_rename_user_emailotp_user_rename_user_smsotp_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='email address'),
        ),
    ]