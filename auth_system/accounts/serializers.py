from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    is_superuser = serializers.ReadOnlyField(source='user.is_superuser')

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'password', 'is_active', 'is_superuser']
