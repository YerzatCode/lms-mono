from django.db import models
from django.contrib.auth.models import User
from members.models import Customer



class TaskIsFill(models.Model):
	title	= models.CharField('Тапсырма тақырыбы', max_length = 75)
	body 	= models.TextField('Тапсырма мәтіні')
	answer 	= models.CharField('Тапсырма жауабы', max_length = 25)

	TASK_TYPE_SELF = 'Кодты аяқта'
	TASK_TYPE_FILL = 'Бос орынды толтыр'

	TASK_TYPE_OPTIONS = (
		(TASK_TYPE_SELF, 'Кодты аяқта'),
		(TASK_TYPE_FILL, 'Бос орынды толтыр')
	)

	t_type	= models.CharField(max_length=100,
		verbose_name='Тапсырма түрі',
		choices=TASK_TYPE_OPTIONS,
		default=TASK_TYPE_SELF)

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Тапсырма '
		verbose_name_plural = 'Тапсырмалар (Код және бос орын)'


class TaskIsTest(models.Model):
	title			= models.CharField('Тапсырма тақырыбы', max_length = 75)
	body			= models.TextField('Тапсырма мәтіні және коды')
	answer_true		= models.CharField('Тапсырма жауабы', max_length = 25)
	answer_1	= models.CharField('Нұсқа (1)', max_length = 25)
	answer_2	= models.CharField('Нұсқа (2)', max_length = 25)
	answer_3	= models.CharField('Нұсқа (3)', max_length = 25)
	answer_4	= models.CharField('Нұсқа (4)', max_length = 25, default = 'Нұсқа (4)')

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Тапсырма'
		verbose_name_plural = 'Тапсырмалар (Тест)'


class Course(models.Model):
	title	= models.CharField('Сабақ тақырыбы', max_length = 75)
	date	= models.CharField('Сабақ қосылды', max_length = 30)
	teacher	= models.CharField('Сабаты қосты', max_length = 30)
	task_f	= models.ManyToManyField(TaskIsFill, verbose_name='Тапсырма түрі (Код және бос орын)', blank=True, related_name = 'course_task')
	task_t	= models.ManyToManyField(TaskIsTest, verbose_name='Тапсырма түрі (Тест)', blank=True, related_name = 'course_task')

	COURSE_TYPE_SELF = '1' 

	COURSE_TYPE_OPTIONS = (
		(COURSE_TYPE_SELF, '1'),
		('2', '2'),
		('3', '3'),
		('4', '4'),
		('5', '5'),
		('6', '6'),
		('7', '7'),
		('8', '8'),
		('9', '9'),
		('10', '10'),
		('11', '11'),
	)

	synup	= models.CharField(max_length=100,
		verbose_name='Сыныпты көрсетіңіз',
		choices=COURSE_TYPE_OPTIONS,
		default=COURSE_TYPE_SELF)

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Сабақ'
		verbose_name_plural = 'Сабақтар'


class Subject(models.Model):
	title	 = models.CharField('Пән атауы', max_length = 25)
	teachers = models.ManyToManyField(Customer, verbose_name='Пән мұғалімдері', blank=True, related_name = 'teacher_sbj')
	course	 = models.ManyToManyField(Course, verbose_name='Сабақтар', blank=True, related_name = 'course_sbj')

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Пән'
		verbose_name_plural = 'Пәндер'