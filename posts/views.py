from django.shortcuts import render, redirect
from django.views.decorators.http import require_GET


@require_GET
def page_not_found_view(request, exception):
    return render(request, '404.html')

@require_GET
def index(request):
    if not request.user.is_authenticated:
        if 'next' not in request.GET or request.GET.get('next') != 'home':
            return redirect('request_otp')
    return render(request, 'posts/index.html')