from django.core.mail import send_mail
from django.conf import settings

def send_email(address, otp):
    subject = 'سایت تست | بازیابی رمز عبور'
    message = f" رمز عبور شما : {otp}"
    recipient_list = (address, )
    from_email = settings.DEFAULT_FROM_EMAIL
    send_mail( subject, message, from_email, recipient_list )