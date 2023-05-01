from django.shortcuts import render
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework import generics
from .serializers import UserCreateSerializer
from rest_framework.generics import DestroyAPIView
from rest_framework.permissions import IsAdminUser
User = get_user_model()

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = [AllowAny]

class UserDelete(DestroyAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]