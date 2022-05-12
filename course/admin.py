from django.contrib import admin
from .models import TaskIsFill, TaskIsTest, Course, Subject


admin.site.register(Subject)
admin.site.register(Course)
admin.site.register(TaskIsTest)
admin.site.register(TaskIsFill)