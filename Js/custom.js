/*==========================================================
                         SERVICES
===========================================================*/


$(function () {
    
    // animate on stroll
    new WOW().init();
    
});

/*==========================================================
                       Work
===========================================================*/
$(function () {
    
    $("#Work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*==========================================================
                       Team
===========================================================*/
$(function () {
    
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
             //breakpoint from 480 up
            0 : {
                items: 1
            },
            320 : {
                items: 2
            },
             //breakpoint from 480 up
            480 : {
                items: 2
            },
             //breakpoint from 480 up
            768 : {
                items: 3
            }
           
        }
    });
});

/*==========================================================
                       Testimonials
===========================================================*/
$(function () {
    
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*==========================================================
                       Stats
===========================================================*/
$(function () {
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
});

/*==========================================================
                       CLIENTS
===========================================================*/
$(function () {
    
    $("#clients-logos").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
             //breakpoint from 480 up
            0 : {
                items: 1
            },
             //breakpoint from 480 up
            480 : {
                items: 3
            },
             //breakpoint from 480 up
            768 : {
                items: 5
            },
            992 : {
                items: 6
            }
        }
    });
});

/*==========================================================
                       NAVIGATION
===========================================================*/
$(function () {
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() < 50 ){
            //hide nav
            $("nav").removeClass("tosco-top-nav");
            $("#bact-to-top").fadeOut();
        }else {
          //show nav 
            $("nav").addClass("tosco-top-nav");
            $("#bact-to-top").fadeIn();
        }
    })
    
});
//smooth scrolling
$(function () {
    
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");
        
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1250);
        
    })
    
});

//close moble menu on click
$(function () {
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
    
    
});