(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".case-studies-carousel").owlCarousel({
            items:3,
            loop:true,
            margin: 30,
            dots: false,
        });

        $(".case-study-carousel").owlCarousel({
            items:3,
            loop:true,
            dots: false,
        });

        $(".testimonial-carousel").owlCarousel({
            items:1,
            loop:true,
        });

        $(".testimonial-carousel-2").owlCarousel({
            items:1,
            loop:true,
            autoplay: true,
        });
        
        $(".logo-carousel").owlCarousel({
            items:6,
            loop:true,
        });
        
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop:true,
            nav: true,
            navText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
        });
        
        $('.video-play-btn').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false

	    });
        
        $('.menu-trigger').on('click', function(){
            $('.off-canvas-menu').addClass('show-off-canvas-menu');
            $('.off-canvas-menu-shade ').addClass('active');
        });
        $('.menu-close, .off-canvas-menu-shade').on('click', function(){
            $('.off-canvas-menu').removeClass('show-off-canvas-menu');
            $('.off-canvas-menu-shade').removeClass('active');
        });
        
        $('.single-testimonial-box').hover(function(){
            $('.single-testimonial-box').removeClass('active');
            $(this).addClass('active');
        });
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	