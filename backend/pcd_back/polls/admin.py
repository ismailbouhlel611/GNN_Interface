from django.contrib import admin
from .models import Teacher
from django.contrib.auth import get_user_model

User = get_user_model()

class TeacherAdmin(admin.ModelAdmin):
    fields = ['username', 'password', 'email']
    
    def save_model(self, request, obj, form, change):
        if not change:
            # Set the admin id to the current logged in user when creating a new teacher
            obj.admin_id = request.user.id
        super().save_model(request, obj, form, change)

admin.site.register(Teacher, TeacherAdmin)
