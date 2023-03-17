from django.contrib.auth.forms import SetPasswordForm, PasswordChangeForm

from django.contrib.auth import get_user_model

UserModel = get_user_model()

class VerifyPassword(SetPasswordForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['new_password1'].widget.attrs = {
            'placeholder': 'رمز عبور',
            'class': 'form-control mb-3 rounded-3',
            'autofocus': 'true'
        }
        self.fields['new_password2'].widget.attrs = {
            'placeholder': 'تائید رمز عبور',
            'class': 'form-control mb-3 rounded-3',
        }


class ChangePassword(PasswordChangeForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['old_password'].widget.attrs = {
            'placeholder': 'رمز عبور فعلی',
            'class': 'form-control mb-3 rounded-3',
            'autofocus': 'true'
        }
        self.fields['new_password1'].widget.attrs = {
            'placeholder': 'رمز عبور جدید',
            'class': 'form-control mb-3 rounded-3',
        }
        self.fields['new_password2'].widget.attrs = {
            'placeholder': 'تائید رمز عبور جدید',
            'class': 'form-control mb-3 rounded-3',
        }

