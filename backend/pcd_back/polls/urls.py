from django.urls import path
from django.contrib import admin
from django.urls import include, path
from . import views
from django.conf.urls import url 
from polls import views

urlpatterns = [
    path('', views.index, name='index'),
    url(r'^api/teachers$', views.teachers_list),
    url(r'^api/teachers/(?P<pk>[0-9]+)$', views.teacher_detail),
    
]