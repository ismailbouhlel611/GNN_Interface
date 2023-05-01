from django.urls import path , include ,re_path
from django.views.generic import TemplateView
from django.contrib import admin
import sys
import os

# add the parent directory of the current file to the Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from accounts.views import UserList



urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('my-admin/', admin.site.urls),
    path('users/', UserList.as_view(), name='user-list'),
]

urlpatterns += [re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]