$(document).ready(function(){
    $(".box p").fadeIn(1750);
    
    $('img').fadeIn(1500);
    
    $button = $('button');
	$button.hide();
	var timeOut = setTimeout(function() {
		$button.fadeIn('slow');
	}, 6500);
    
    $('.jumbotron .container-fluid h2').fadeIn(3000)
	
	$('button').click(function(){
		$(this).addClass('btn-primary disabled');    
	    $('p').hover(function(){
	            $(this).fadeOut('slow');
	    });
	    $('li').hover(function(){
	            $(this).fadeOut('slow');
	    });
	    $('h2').hover(function(){
	            $(this).fadeOut('slow');
	    });
	    $('.disabled').hover(function(){
		    	$(this).fadeOut('slow');
	    });   
		$('img').hover(function(){
				$(this).fadeOut('slow');
		});
   });
});
