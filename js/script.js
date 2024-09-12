// Window Scroll
$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

//document ready
$(document).ready(function () {
    new Typed('#type-it', {
        strings: ['Software Engineer', ' '],
        typeSpeed: 50,
        loop: true,
    });
    new Typed('#type-it1', {
        strings: ['student', ' '],
        typeSpeed: 50,
        loop: true,
    });
    new Typed('#type-it2', {
        strings: ['Kyte', ' ','Cassie',' '],
        typeSpeed: 50,
        loop: true,
    });
});
