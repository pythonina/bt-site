from django.core.validators import RegexValidator

PHONE_VALIDATOR = RegexValidator('^09\d{9}$', 'تلفن باید شبیه 09123456789 باشد !')
CODE_VALIDATOR = RegexValidator('^\d{5}$')