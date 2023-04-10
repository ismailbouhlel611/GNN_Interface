from rest_framework import serializers 
from polls.models import Teacher
 
 
class TeacherSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Teacher
        fields = (
                    'id',
                    'username',
                    'password',
                    'email',
                    'created_at',
                    'updated_at',
                  )