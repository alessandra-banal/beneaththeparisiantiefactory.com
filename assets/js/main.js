//scroll script
$(document).ready(function() { 

	$(".scroll").click(function(event){		
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});


	
	//modal script
	var $overlay= $('<div id="overlay"></div>');
	var $image= $("<img>");
	var $caption= $("<p></p>");
	var $body= $("body");
	
	
		$overlay.append($image);
		$overlay.append($caption);
		$("#film-stills").append($overlay);
		
		$(".all-stills a").click(function(event){
			event.preventDefault();
			var imageLocation = $(this).attr("href");
			$image.attr("src", imageLocation);
			$overlay.show();
			var captionText = $(this).children("img").attr("alt");
			$caption.text(captionText);
			x = $body.scrollTop();
			$overlay.css('top', x + 'px');
		});
			$overlay.click(function(){
			$overlay.hide();
	});
	
});

/*
if ($(window).width() < 960) {
	if{

	}
	else{

	}
}
*/