$(function () {

    "use strict";

    //===== Sticky menu activation
    
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navigation1").removeClass("sticky");
        } else {
            $(".navigation1").addClass("sticky");
        }
    });
    
    //===== Mobile menu activation
    $(".navbar-toggler").on('click',function(){
        $(this).toggleClass('active');
    });
    
    
    //===== Mobile submenu toggler activation
    var subMenu = $(".navbar-nav li .submenu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
        });

        var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children(".submenu").slideToggle();
            return false
        });

    }

    //======= about table scroll
    $(".about_table").niceScroll({
        cursorcolor: "#444",
        cursorwidth: "10px",
        cursormaxheight: 32,
    });

    

    //===== About Corona Virus Counter
    $('.count').counterUp({
        delay: 100,
        time: 1500
    });



    //===== Back-to-top button

    //==== Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });













});