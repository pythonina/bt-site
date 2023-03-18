from django.conf import settings
from django.forms import ValidationError
from django.contrib.auth import get_user_model, login, logout
from django.shortcuts import render, redirect
from django.http.response import JsonResponse
from django.views.decorators.http import require_POST
from django.core.validators import EmailValidator

from django.contrib.auth.hashers import make_password, check_password
from django.http.response import JsonResponse
from django.utils import timezone
from django.contrib.auth import authenticate
from django.utils.crypto import get_random_string
from django.contrib.auth.decorators import login_required
from django.contrib.auth import update_session_auth_hash
import ghasedakpack
import random, string

from .validators import PHONE_VALIDATOR, CODE_VALIDATOR
from .models import SmsOtp, EmailOtp, EmailLoginOtp
from .forms import ChangePassword, VerifyPassword
from .utils import send_email


UserModel = get_user_model()

sms = ghasedakpack.Ghasedak(settings.SMS_APIKEY)

def send_sms(**kwargs):
    res = sms.verification({**kwargs})
    if res == False:
        return JsonResponse({}, status=500)

def _generate_otp():
    rand = random.SystemRandom()
    digits = rand.choices(string.digits, k=5)
    return ''.join(digits)


def request_otp(request): 

    if request.method == 'GET':
        return render(request, 'accounts/auth.html')
        
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':

        phone = request.POST.get('phone')

        try:
            PHONE_VALIDATOR(phone)
        except ValidationError:
            return JsonResponse({'msg': 'لطفا شماره تلفن را صحیح وارد نمایید'}, status=400)


        user, created = UserModel.objects.get_or_create(phone=phone)
        if not created:
            sms_otp = SmsOtp.objects.only('expired').filter(user=user).first()
            if sms_otp:
                expired = sms_otp.expired
                now = timezone.now()
                if expired > now:
                    ttl = ( expired - now ).seconds
                    return JsonResponse({'ttl': ttl}, status=226)

        otp = _generate_otp()
        print(otp)
        # send_sms(receptor=phone, template='huzan', type=1, param1=otp)
        SmsOtp.objects.create(
            user=user,
            code=make_password(otp),
            expired=timezone.now() + timezone.timedelta(seconds=45)
        )
        return JsonResponse({'msg': 'کد ارسال شده را وارد نمایید', 'ttl': 45, 'otp': otp}, status=200)




@require_POST
def verify_otp(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':

        phone = request.POST.get('phone')
        code = request.POST.get('code')

        try:
            PHONE_VALIDATOR(phone)
            CODE_VALIDATOR(code)
        except ValidationError:
            return JsonResponse({'msg': 'لطفا مشخصات را صحیح وارد نمایید'}, status=400)

        user = authenticate(request, phone=phone, code=code)

        if user:

            if not user.is_active:
                return JsonResponse({'msg': 'متاسفانه این حساب مسدود شده است !'}, status=400)
            if user.password:
                return JsonResponse({}, status=226)
            login(request, user)
            return JsonResponse({})

        return JsonResponse({'msg': 'کد اشتباه است !'}, status=400)


@require_POST
def verify_password(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':

        phone = request.POST.get('phone')
        code = request.POST.get('code')
        password = request.POST.get('password')

        try:
            PHONE_VALIDATOR(phone)
            CODE_VALIDATOR(code)
        except ValidationError:
            return JsonResponse({'msg': 'لطفا مشخصات را صحیح وارد نمایید'}, status=400)

        user = authenticate(request, phone=phone, code=code)

        if user:
            if not user.is_active:
                return JsonResponse({'msg': 'متاسفانه این حساب مسدود شده است !'}, status=400)
            if user.password and user.check_password(password):
                login(request, user)
                return JsonResponse({})
            
            email_login_otp = EmailLoginOtp.objects.filter(user=user).first()
            if email_login_otp and email_login_otp.expired >= timezone.now() and check_password(password, email_login_otp.code):
                user.set_password(password)
                user.save()
                login(request, user)
                return JsonResponse({})
            
            return JsonResponse({'msg': 'رمز عبور اشتباه است !'}, status=400)

        return JsonResponse({'msg': 'کد اشتباه است !'}, status=400)


@require_POST
def forget_password(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':

        phone = request.POST.get('phone')
        email = request.POST.get('email')
        try:
            PHONE_VALIDATOR(phone)
            EmailValidator(email)
        except ValidationError:
            return JsonResponse({'msg': 'لطفا ایمیل صحیح وارد نمایید'}, status=400)
        
    try:
        user = UserModel.objects.get(phone=phone)
        if not user.is_active:
            return JsonResponse({'msg': 'متاسفانه این حساب مسدود شده است !'}, status=400)
        if user.password:
            if user.email:
                email_otp = EmailLoginOtp.objects.only('expired').filter(user=user).first()
                if email_otp:
                    expired = email_otp.expired
                    now = timezone.now()
                    if expired > now:
                        ttl = ( expired - now ).seconds
                        return JsonResponse({'ttl': ttl}, status=226)

                password = get_random_string(6)
                print(password)
                
                send_email(user.email, password);
                EmailLoginOtp.objects.create(
                    user=user,
                    code=make_password(password),
                    expired=timezone.now() + timezone.timedelta(seconds=60),
                )
                return JsonResponse({'msg': 'رمز عبور به ایمیل شما ارسال شد', 'ttl': 60}, status=200)
            return JsonResponse({'msg': 'این حساب ایمیل بازیابی ندارد !'}, status=400)
        return JsonResponse({'msg': 'این حساب رمز عبور ندارد !'}, status=400)
    except UserModel.DoesNotExist:
        return JsonResponse({'msg': 'کاربری با این شماره تلفن پیدا نشد !'}, status=400)
   

@login_required
def set_password(request):
    if request.method == 'GET':
        if request.user.password:
            form = ChangePassword(request.user)
        else:
            form = VerifyPassword(request.user)
        return render(request, 'accounts/set_password.html', {'form': form})
    elif request.method == 'POST':
        if request.user.password:
            form = ChangePassword(request.user, data=request.POST)
        else:
            form = VerifyPassword(request.user, data=request.POST)
        if form.is_valid():
            form.save()
            update_session_auth_hash(request, form.user)
            return redirect('/?next=home')
        return render(request, 'accounts/set_password.html', {'form': form})


@login_required
def request_otp_email(request): 

    if request.method == 'GET':
        return render(request, 'accounts/set_email.html')
    
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':

        email = request.POST.get('email')
        try:
            EmailValidator(email)
        except ValidationError:
            return JsonResponse({'msg': 'لطفا ایمیل صحیح وارد نمایید'}, status=400)

        if request.user.email == email:
            return JsonResponse({'msg': 'آدرس ایمیل شما همین است !'}, status=400)


        email_otp = EmailOtp.objects.only('expired').filter(user=request.user, email=email).first()

        if email_otp:
            expired = email_otp.expired
            now = timezone.now()
            if expired > now:
                ttl = (expired - now).seconds
                return JsonResponse({'ttl': ttl}, status=226)

        otp = _generate_otp()
        print(otp)
        send_email(email, otp);

        EmailOtp.objects.create(
            user=request.user,
            code=make_password(otp),
            expired=timezone.now() + timezone.timedelta(seconds=60),
            email=email
        )
        return JsonResponse({'msg': 'کد ارسال شده را وارد نمایید', 'ttl': 60}, status=200)


@login_required
@require_POST
def set_email(request):
     if request.headers.get('x-requested-with') == 'XMLHttpRequest':

        email = request.POST.get('email')
        code = request.POST.get('code')
        try:
            EmailValidator(email)
            CODE_VALIDATOR(code)
        except ValidationError:
            return JsonResponse({'msg': 'لطفا ایمیل صحیح وارد نمایید'}, status=400)
        
        email_otp = EmailOtp.objects.filter(user=request.user, email=email).first()
        if email_otp and email_otp.expired >= timezone.now() and check_password(code, email_otp.code):
            request.user.email = email
            request.user.save()
            return JsonResponse({})
        return JsonResponse({'msg': 'کد اشتباه است !'}, status=400)
        



@login_required
def logout_view(request):
    logout(request)
    return redirect('request_otp')

