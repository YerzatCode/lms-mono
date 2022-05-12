from django import forms
from .models import TaskIsFill, Course
from django.contrib.admin.widgets import FilteredSelectMultiple


class TaskFillAddForm(forms.ModelForm):
	class Meta:
		model = TaskIsFill
		fields = ('__all__')

class CourseAddForm(forms.ModelForm):
	class Meta:
		model = Course
		fields = ('__all__')

class TeamForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = ('__all__')
        widgets = {
            'task_f': FilteredSelectMultiple(u'Тапсырма түрі (Код және бос орын)', False),
        }
    class Media:
        css = {
            'all': ['admin/css/widgets.css'],
        }
        js = ['/admin/jsi18n/']