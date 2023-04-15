from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from polls.models import Teacher
from polls.serializers import TeacherSerializer
from rest_framework.decorators import api_view
# Create your views here

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAdminUser])
def teachers_list(request):
    # GET list of teachers, POST a new teacher, DELETE all tutorials

    if request.method == 'GET':
        teachers = Teacher.objects.all()
        
        username = request.GET.get('username', None)
        if username is not None:
            teachers = teachers.filter(username__icontains=username)
        
            teachers_serializer = TeacherSerializer(teachers, many=True)
            return JsonResponse(teachers_serializer.data, safe=False)
        else:
            teachers_serializer = TeacherSerializer(teachers, many=True)
            return JsonResponse(teachers_serializer.data, safe=False)
    elif request.method == 'POST':
        teacher_data = JSONParser().parse(request)
        teacher_serializer = TeacherSerializer(data=teacher_data)
        if teacher_serializer.is_valid():
            teacher_serializer.save()
            return JsonResponse(teacher_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Teacher.objects.all().delete()
        return JsonResponse({'message': '{} Teachers were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAdminUser])
def teacher_detail(request, pk):
    teacher = Teacher.objects.get(pk=pk)
 
    if request.method == 'GET': 
        teacher_serializer = TeacherSerializer(teacher) 
        return JsonResponse(teacher_serializer.data) 
    elif request.method == 'DELETE': 
        teacher.delete() 
        return JsonResponse({'message': 'Teacher was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT': 
        teacher_data = JSONParser().parse(request) 
        teacher_serializer = TeacherSerializer(teacher, data=teacher_data) 
        if teacher_serializer.is_valid(): 
            teacher_serializer.save() 
            return JsonResponse(teacher_serializer.data) 
        return JsonResponse(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    



