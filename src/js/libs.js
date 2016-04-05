// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
$(function(){
    "use strict";
    var breakpoints = {small: 480, medium: 768, large: 1024},
        viewport    = document.documentElement.clientWidth;
    // iPicture
    if($().iPicture)
        $( ".js-iPicture" ).iPicture();
    // Slippry Slider http://slippry.com/
    var thumbs = jQuery('#thumbnails').slippry({
        // general elements & wrapper
        slippryWrapper: '<div class="slippry_box preview__slider thumbnails" />',
        // options
        transition: 'horizontal',
        pager: false,
        auto: false,
        onSlideBefore: function (el, index_old, index_new) {
            jQuery('.thumbs a img').removeClass('active');
            jQuery('img', jQuery('.thumbs a')[index_new]).addClass('active');
        }
    });
        
    jQuery('.thumbs a').click(function () {
        thumbs.goToSlide($(this).data('slide'));
        return false;
    });
    // Slick Carousel https://kenwheeler.github.io/slick/
    $('.carousel').slick({
        slidesToShow: viewport < breakpoints.small ? 1 : viewport < breakpoints.medium ? 2 : 3,
        slidesToScroll: 1,
        dots: true,
        speed: 300
    });
});