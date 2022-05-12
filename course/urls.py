from django.urls import path 
from . import views


urlpatterns = [
	path('', views.SubjectListView.as_view(), name = 'subject'),
	path('detail/<int:pk>', views.CourseDetailView.as_view(), name='course_page'),
	path('compiler/', views.compiler, name = 'compiler'),
	path('task/add/', views.task_add, name = 'task_add'),
	path('task/create/', views.add_course, name = 'add_course'),
]