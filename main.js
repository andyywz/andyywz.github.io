$(document).ready(function () {
  $(".main").toggleClass("hide");
  $(".main").fadeToggle("slow", "linear");
  
	$('a.contact-button').on("click", function () {
		$('.shadowbox').toggleClass("hide");
		$('.lightbox').toggleClass("hide");

    $('.contact-container').toggleClass("hide");
	});
	
	$('.shadowbox').on("click", function () {
		$('.shadowbox').toggleClass("hide");
		$('.lightbox').toggleClass("hide");
    
    $(".contact-container").toggleClass("hide");
	});
});
