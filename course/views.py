from django.shortcuts import render, redirect

def cod(python_cod): 

	commands = python_cod.split('\n')
	for command in commands: 
		try:
			res = eval(command)
		except SyntaxError:
			res = exec(command)
		except IndentationError:
			res = 'Тармақталған алгоритм қолданып керек емес!'
	return res
def compiler(request):
	res = 'Нәтиже осы жерде'
	if request.method == 'POST':
		python_cod = request.POST.get('python_cod') 
		res = cod(python_cod)
		redirect('compiler')
	data = {
		'compile_res':res,
	}

	return render(request, 'course/compiler.html', data)