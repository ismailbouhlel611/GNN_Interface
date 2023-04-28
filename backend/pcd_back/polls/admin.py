from django.contrib import admin
from .models import Teacher

from django.contrib.auth import get_user_model


class TeacherAdmin(admin.ModelAdmin):
    fields = ['username', 'password', 'email']
    
    def save_model(self, request, obj, form, change):
        if not change:
            # Get the User model
            User = get_user_model()
            # Get the ID of the logged-in user
            logged_in_user_id = request.user
            # Set the admin_id to the logged-in user's ID when creating a new teacher
            obj.admin_id = logged_in_user_id
        super().save_model(request, obj, form, change)

admin.site.register(Teacher, TeacherAdmin)
