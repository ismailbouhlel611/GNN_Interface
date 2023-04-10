from django import forms
from django.contrib.auth import get_user_model

from .models import Teacher

User = get_user_model()

class TeacherAdminForm(forms.ModelForm):
    username = forms.CharField(max_length=User._meta.get_field('username').max_length)
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = Teacher
        fields = '__all__'

    def save(self, *args, **kwargs):
        user = kwargs.pop('user', None)
        if user:
            self.admin_id = str(user.id)
        super().save(*args, **kwargs)
