from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.contrib.auth.hashers import check_password
from .models import SmsOtp
UserModel = get_user_model()


class PhoneBackend(ModelBackend):
    def authenticate(self, request, phone, code, **kwargs):
        try:
            user = UserModel.objects.get(phone=phone)
            sms_otp = SmsOtp.objects.filter(user=user).first()
            if sms_otp and sms_otp.expired >= timezone.now() and check_password(code, sms_otp.code):
                return user
            return None
        except UserModel.DoesNotExist:
            return None

    def get_user(self, user_id):
        UserModel = get_user_model()
        try:
            return UserModel.objects.get(pk=user_id)
        except UserModel.DoesNotExist:
            return None
