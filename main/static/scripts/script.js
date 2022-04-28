var menu_status = 'opened';

jQuery('#open_menu').on('click', function() {
	if (menu_status == 'opened') {
		$("#open_menu_text").css("display","none")
		$(".nav-link-text").css("display", 'none');
		$("#open_menu").css("display", 'block');	
		$("nav").css("width", '60px');	
		$("nav li").css("padding", '15px');	
		menu_status = 'closed'
	} else {
		$("#open_menu_text").css("display","inline-block");
		$(".nav-link-text").css("display", 'inline-block');
		$("#open_menu").css("display", 'inline-block');	
		$("nav").css("width", '250px');	
		$("nav li").css("padding-left", '60px');	
		menu_status = 'opened'

	}
}); 