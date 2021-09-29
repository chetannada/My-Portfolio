$(document).ready(function(){
    // Scroll down sticky navbar script
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
        // Scroll up Button script
        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
        // Fade In & Fade Out Elements on Scroll script
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_element ){
                $(this).removeClass('showme');
            }
        }); 
    });

    // Scroll up Button script
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop: 0});
    });

    

    // Typing animation script
    var typed = new Typed('#typing', {
        strings: ["Web Developer", "Freelancer", "Youtuber", "Blogger", "Teacher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
      });

      var typed = new Typed('#typing2', {
        strings: ["Web Developer", "Freelancer", "Youtuber", "Blogger", "Teacher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
      });

    // toggle menu/navbar script
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
        
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

