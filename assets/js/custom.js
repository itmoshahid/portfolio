(function($) {
	'use strict';
	 
    // START MENU JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar-light').addClass('menu-shrink');
        } else {
            $('.navbar-light').removeClass('menu-shrink');
        }
    });			
    
    $('.navbar .navbar-nav li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault(); 
    });
    
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });				
    // END MENU JS	

    // Hero Slider
    $('.hero-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='icofont-rounded-left'></i>", 
            "<i class='icofont-rounded-right'></i>"
        ]
    })

    // Feedback Slider
    $('.feedback-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='icofont-rounded-left'></i>", 
            "<i class='icofont-rounded-right'></i>"
        ]
    })

    // Logo Slider
    $('.logo-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='icofont-rounded-left'></i>", 
            "<i class='icofont-rounded-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    })

    // Back to top button
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.go-top').addClass('active');
        } else {
            $('.go-top').removeClass('active');
        }
    });	

    $('.go-top').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault(); 
    });




    $(".images img").click(function(){
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
});

 
})(jQuery);


  
