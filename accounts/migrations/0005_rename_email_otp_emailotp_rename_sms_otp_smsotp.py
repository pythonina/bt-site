# Generated by Django 4.1.7 on 2023-03-17 10:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_remove_account_code_remove_account_expired_sms_otp_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='email_otp',
            new_name='EmailOtp',
        ),
        migrations.RenameModel(
            old_name='sms_otp',
            new_name='SmsOtp',
        ),
    ]
