from django.urls import path
from .views import request_otp, verify_otp, verify_password, forget_password, set_password, request_otp_email, set_email, logout_view

urlpatterns = [
    path('request_otp/', request_otp, name='request_otp'),
    path('verify_otp/', verify_otp, name='verify_otp'),
    path('verify_password/', verify_password, name='verify_password'),
    path('forget_password/', forget_password, name='forget_password'),
    path('set_password', set_password, name='set_password'),
    path('request_otp_email/', request_otp_email, name='request_otp_email'),
    path('set_email', set_email, name='set_email'),
    path('logout/', logout_view, name='logout'),
] 