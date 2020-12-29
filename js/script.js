$('.filters-container').mixItUp();
$('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 2,
            nav: true,
            dots: false,
        },
        1000: {
            items: 3,
            nav: true,
            dots: false,
        }
    }
});
$(document).ready(function () {
    $('.testimonials-carousel .item a').click(function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
         $(anchor).fadeIn(300);
    });
    $('.filters-container .project a').click(function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
         $(anchor).fadeIn(300);
    });
    $('.close-video').click(function(e){
        e.preventDefault();
        $(this).parent().parent().parent().fadeOut();
        var url = $('.video-frame iframe').attr('src');
        $('.video-frame iframe').attr('src', '');
        $('.video-frame iframe').attr('src', url);
    });
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("nav.navbar").addClass("fixed");
    }else{
        $("nav.navbar").removeClass("fixed");
    }
});