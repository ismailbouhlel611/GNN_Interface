from django.db import models

# Create your models here.
class Admin (models.Model):
    username = models.CharField(max_length=70, blank=False, default='')
    password = models.CharField(max_length=200,blank=False, default='')
    email = models.CharField(max_length=70,blank=False,default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    
class Teacher (models.Model):
    username = models.CharField(max_length=70, blank=False, default='')
    password = models.CharField(max_length=200,blank=False, default='')
    email = models.CharField(max_length=70,blank=False,default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    admin_id = models.ForeignKey(to=Admin, on_delete=models.SET_NULL,null=True)
