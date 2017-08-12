(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        /*'`'`'`'`'`'`'`'`'`'`'`'`'`'`'`
                MagnificPopup JS 
        '`'`'`'`'`'`'`'`'`'`'`'`'`'`'`'`*/
        $('.video-play-btn').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        /*'`'`'`'`'`'`'`'`'`'`'`'`'`'`
                OwlCarousel JS
        '`'`'`'`'`'`'`'`'`'`'`'`'`'`'`*/
            /*'`'`'`'`'`'`'`'`'`'`'`'`
                    CaseStudy JS
            '`'`'`'`'`'`'`'`'`'`'`'`'`*/
            $(".case-studies-carousel").owlCarousel({
                loop:true,
                margin: 30,
                dots: false,
                autoplay: true,
                responsive: {
                    0 : {
                        items: 1
                    },
                    768 : {
                        items: 2
                    },
                    992 : {
                        items: 3
                    }
                }
            });
            $(".case-study-carousel").owlCarousel({
                items: 3,
                loop: true,
                dots: false,
                autoplay: true,
                responsive: {
                    0 : {
                        items: 1
                    },
                    768 : {
                        items: 2
                    },
                    992 : {
                        items: 3
                    }
                }
            });

            /*'`'`'`'`'`'`'`'`'`'`'`'`'`'`
                    Testimonial JS
            '`'`'`'`'`'`'`'`'`'`'`'`'`'`'`*/
            $(".testimonial-carousel").owlCarousel({
                items:1,
                loop:true,
                autoplay: true,
            });
            $(".testimonial-carousel-2").owlCarousel({
                items:1,
                loop:true,
                autoplay: true,
            });

            /*'`'`'`'`'`'`'`'`'`'`
                    Logo JS
            '`'`'`'`'`'`'`'`'`'`'`*/
            $(".logo-carousel").owlCarousel({
                items:6,
                loop:true,
                autoplay: true,
                responsive: {
                    0 : {
                        items: 2
                    },
                    768 : {
                        items: 4
                    },
                    992: {
                        items: 6
                    }
                }
            });

            /*'`'`'`'`'`'`'`'`'`'`'`'`
                    Homepage JS
            '`'`'`'`'`'`'`'`'`'`'`'`'`*/
            $(".homepage-slides").owlCarousel({
                items: 1,
                loop:true,
                navText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                autoplay: true,
                responsive: {
                    0 : {
                        nav: false
                    },
                    786 : {
                        nav: false
                    },
                    992: {
                        nav: true
                    }
                }
            });

        /*'`'`'`'`'`'`'`'`'`'`'`'`'`
                OffCanvas JS
        '`'`'`'`'`'`'`'`'`'`'`'`'`'`*/
        $('.menu-trigger').on('click', function(){
            $('.off-canvas-menu').addClass('show-off-canvas-menu');
            $('.off-canvas-menu-shade ').addClass('active');
        });
        $('.menu-close, .off-canvas-menu-shade').on('click', function(){
            $('.off-canvas-menu').removeClass('show-off-canvas-menu');
            $('.off-canvas-menu-shade').removeClass('active');
        });

        /*'`'`'`'`'`'`'`'`'`'`'`'`'`'`
                SearchBox JS
        '`'`'`'`'`'`'`'`'`'`'`'`'`'`'`*/
        $('.search-trigger').on('click',function(){
            $('.search-box input').toggleClass("active");
        });

        $('.search-trigger-2').on('click',function(){
            $('.search-it').addClass('active');
        });
        $('.menu-close-2').on('click',function(){
            $('.search-it').removeClass('active');
        });

        /*'`'`'`'`'`'`'`'`'`'`'`'`'`'`
                TestimonialBox JS
        '`'`'`'`'`'`'`'`'`'`'`'`'`'`'`*/
        $('.single-testimonial-box').hover(function(){
            $('.single-testimonial-box').removeClass('active');
            $(this).addClass('active');
        });

        /*'`'`'`'`'`'`'`'`'`'`'`'`'`'`
                SlickNav JS
        '`'`'`'`'`'`'`'`'`'`'`'`'`'`'`*/
        $('#traffic-menu').slicknav({
            prependTo: "#mobile-menu-wrap",
            label : "",
            closedSymbol: '&#9654;',
            openedSymbol: '&#9660;',
            allowParentLinks: true,
        });
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	