
function openTask(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";

	var true_q = qestion.length - qestion.reduce((a, b) => a + b, 0)
	document.getElementById("all_answer").innerHTML = 'Барлығы ' + qestion.length
	document.getElementById("true_answer").innerHTML = 'Дұрыс ' + true_q
	document.getElementById("false_answer").innerHTML = 'Қате ' + qestion.reduce((a, b) => a + b, 0)
	document.getElementById("id_all_task").value = qestion.length
	document.getElementById("id_true_task").value = true_q
	document.getElementById("id_false_task").value = qestion.reduce((a, b) => a + b, 0)

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function checkAnswer(task, user, result, input_block, input_style, task_status) {  
	var user_answer = document.getElementById(user).value;	
	var true_answer = localStorage.getItem(task);
	if (user_answer == true_answer) {
		console.log(true)
		document.getElementById(result).innerHTML = 'Дұрыс'; 
		$("#" + input_style).css("background", '#02a0da');
		qestion.push(0)
		localStorage.setItem(task_status, 'true')


	} else {
		console.log(false)
		document.getElementById(result).innerHTML = 'Қате'; 
		$("#" + input_style).css("background", 'red');
		qestion.push(1) 
		localStorage.setItem(task_status, 'false')

	}
	$("#" + input_block).css("display", 'none');
	// document.getElementById("procent_answer").innerHTML = (qestion.reduce((a, b) => a + b, 0)) / qestion.length;
	// console.log(qestion)
	// console.log(qestion.length)
	// console.log(qestion.reduce((a, b) => a + b, 0))
}

function checkAnswerTest(user_answer, true_answer, result, input_style, task_test_block, task_status) {
	if (user_answer == true_answer) {
		console.log(true)
		document.getElementById(result).innerHTML = 'Дұрыс'; 
		$("#" + input_style).css("background", '#02a0da');
		qestion.push(0)
		localStorage.setItem(task_status, 'true')

	} else {
		console.log(false)
		document.getElementById(result).innerHTML = 'Қате'; 
		$("#" + input_style).css("background", 'red');
		qestion.push(1) 
		localStorage.setItem(task_status, 'false')
		
	}
	// var false_q = qestion.length - qestion.reduce((a, b) => a + b, 0)
	// document.getElementById("all_answer").innerHTML = 'Барлығы ' + qestion.length
	// document.getElementById("true_answer").innerHTML = 'Дұрыс ' + false_q
	// document.getElementById("false_answer").innerHTML = 'Қате ' + qestion.reduce((a, b) => a + b, 0)
	// document.getElementById("procent_answer").innerHTML = (qestion.reduce((a, b) => a + b, 0)) / qestion.length;
	// console.log(qestion)
	// console.log(qestion.length)
	// console.log(qestion.reduce((a, b) => a + b, 0))
	$("." + task_test_block + " input").prop("disabled", true);

}