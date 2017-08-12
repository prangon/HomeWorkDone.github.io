jQuery(document).ready(function($){
    
    
//    $('#nav').slicknav();
    
//    $('#menu').sidr();
    
    $(".slider-area").owlCarousel({
        
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        
    });
    
    
    	// Instantiate MixItUp:

	$('#protfolio-items').mixItUp();
});