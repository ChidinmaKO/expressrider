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
  // http://unslider.com/
  if($().unslider){
    $('.slider').unslider({
      autoplay: true,
      arrows: false,
      infinite: true
    });
  }
  // https://kenwheeler.github.io/slick/
  if($().slick){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 4,
      prevArrow: '<span class="slick-prev">&lang;</span>',
      nextArrow: '<span class="slick-next">&rang;</span>',
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 586,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
});
