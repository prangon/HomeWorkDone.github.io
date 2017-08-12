(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".case-studies-carousel").owlCarousel({
            items:3,
            loop:true,
            margin: 30,
            dots: false,
        });

        $(".testimonial-carousel").owlCarousel({
            items:1,
            loop:true,
        });
        
        $(".logo-carousel").owlCarousel({
            items:6,
            loop:true,
        });
        
        
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	