from django.db import models
from django.contrib.auth.models import AbstractUser
from accounts.validators import PHONE_VALIDATOR

class Account(AbstractUser):
    username = None
    first_name = None
    last_name = None

    phone = models.CharField(
        'شماره تلفن',
        validators=[PHONE_VALIDATOR],
        max_length=11,
        unique=True
    )

    USERNAME_FIELD = "phone"

    def get_full_name(self):
        pass

    def get_short_name(self):
        pass
    
    def __str__(self):
        return self.phone
    
class SmsOtp(models.Model):
    
    user = models.ForeignKey(Account, verbose_name='کاربر', on_delete=models.CASCADE, related_name='sms_otps')
    code = models.CharField(max_length=4)
    expired = models.DateTimeField()

    class Meta:
        ordering = ('-expired', )


class EmailLoginOtp(models.Model):
    
    user = models.ForeignKey(Account, verbose_name='کاربر', on_delete=models.CASCADE, related_name='email_login_otps')
    code = models.CharField(max_length=4)
    expired = models.DateTimeField()

    class Meta:
        ordering = ('-expired', )

class EmailOtp(models.Model):

    user = models.ForeignKey(Account, verbose_name='کاربر', on_delete=models.CASCADE, related_name='email_otps')
    code = models.CharField(max_length=4)
    expired = models.DateTimeField()
    email = models.EmailField('آدرس ایمیل')

    class Meta:
        ordering = ('-expired', )