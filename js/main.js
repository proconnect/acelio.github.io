 //  Author - Ace Lio 2017

 $(document).ready(function(){
 	// Hamburger
 	 	$('.nav #hamburger').click(function(){
 		$('.nav ul').slideToggle();
 	});



 	var navOffset = $(".nav").offset().top; 
 	
 	$(window).scroll(function(){
 		var scrollPos = $(window).scrollTop();
 		// $(".status").html(scrollPos);

 		// $(".nav").wrap('<div class="placeholder"></div>');
 		// $("placeholder").height($(".nav").outerHeight()); 

 		if (scrollPos >= navOffset){
 			$(".nav").addClass("fixed");
 		}else{
 			$("nav").removeClass("fixed"); 	
 		}

 	});  
  
 	// About Me Section  
 	$('#bio article p').hide();
 	$('#bio figure p').hide();
 	$('#bio thumbnails').hide();
 	$('#ccf article .hide').hide();
 	$('#dogs article .hide').hide();
 	$('#el3phant article .hide').hide();
 	$('#fou article .hide').hide();
 	$('#spotx article .hide').hide();
 	$('#wb article .hide').hide();

 	$('#bio article h2').click(function(e){
 		e.preventDefault();
 		if(!$(this).hasClass('active')){
			 	$('#bio article p').slideToggle('fast').addClass('active');			 	
			 } else {
			 	$(this).removeClass('active');
			 }	 		
 	});

 	$('#bio figure h2').click(function(e){
 		e.preventDefault();
 		if(!$(this).hasClass('active')){
			 	$('#bio figure p').slideToggle('fast').addClass('active');			 	
			 } else {
			 	$(this).removeClass('active');
			 }	 		
 	}); 

	 $('#ccf article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
				 	$('#ccf article .hide').slideToggle('fast').addClass('active');			 	
				 } else {
				 	$(this).removeClass('active');
				 }	 		
	 	});

	 $('#dogs article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#dogs article .hide').slideToggle('fast').addClass('active');
	 		} else {
	 			$(this).remnoveClass('active');
	 		}
	 });

	 $('#el3phant article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#el3phant article .hide').slideToggle('fast').addClass('active');	 			
	 		} else {
	 			$(this).removeClass('active');
	 		}
	 });


	 $('#fou article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#fou article .hide').slideToggle('fast').addClass('active');	 			
	 		} else {
	 			$(this).removeClass('active');
	 		}
	 });

	 $('#spotx article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#spotx article .hide').slideToggle('fast').addClass('active');	 			
	 		} else {
	 			$(this).removeClass('active');
	 		}
	 });

	 $('#wb article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#wb article .hide').slideToggle('fast').addClass('active');	 			
	 		} else {
	 			$(this).removeClass('active');
	 		}
	 });


 });   