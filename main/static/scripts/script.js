var menu_status = 'opened';

jQuery('#open_menu').on('click', function() {
	if (menu_status == 'opened') {
		$("#open_menu_text").css("display","none")
		$(".nav-link-text").css("display", 'none');
		$("#open_menu").css("display", 'block');	
		$("nav").css("width", '60px');	
		$("nav").css("padding-top", '60px');	
		$("nav li").css("padding", '15px');	
		$(".container").css("margin-left", '80px');	
		$("#open_menu").css("left", '45px');	

		menu_status = 'closed'
	} else {
		$("#open_menu_text").css("display","inline-block");
		$(".nav-link-text").css("display", 'inline-block');
		$("#open_menu").css("display", 'inline-block');	
		$("nav").css("width", '250px');	
		$("nav").css("padding-top", '20px');	
		$("nav li").css("padding", '0');	
		$("nav li").css("padding-top", '10px');	
		$("nav li").css("padding-left", '60px');	
		$("#open_menu").css("left", '235px');
		$(".container").css("margin-left", '250px');	

		menu_status = 'opened'

	}
}); 

$('input').on('input invalid', function() {
	this.setCustomValidity('')
	if (this.validity.valueMissing) {
		this.setCustomValidity("Осы жолақты толтыру міндетті")
	}
	if (this.validity.typeMismatch) {
		this.setCustomValidity("Енгізілген деректер типі сәйкес емес")
	}
	if (this.validity.patternMismatch) {
		this.setCustomValidity("Паттернге сәйкес емес")
	}
})
$('textarea').on('input invalid', function() {
	this.setCustomValidity('')
	if (this.validity.valueMissing) {
		this.setCustomValidity("Алдымен кодты жазыңыз")
	}
	if (this.validity.typeMismatch) {
		this.setCustomValidity("Енгізілген деректер типі сәйкес емес")
	}
	if (this.validity.patternMismatch) {
		this.setCustomValidity("Паттернге сәйкес емес")
	}
})

