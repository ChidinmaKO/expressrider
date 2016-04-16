// Fetch SVG Sprite
var url = 'dist/svgdefs.svg', c = new XMLHttpRequest(), $ = jQuery;
c.open('GET', url, true);
c.setRequestHeader('Content-Type', 'text/xml');
c.send();
function ready(cb){
	/in/.test(document.readyState) ? setTimeout(ready.bind(null, cb), 9) : cb();
}
ready(function(){
	"use strict";
  // Toggling screen-offset menu on smaller viewports
  $(document).on('click', '.js-togglemenu', function(){
    $('html').toggleClass('openNav');
  });
  /* Scroll back to top function */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
  /* Smooth Scroll for in page links */
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
	// Append SVG
	document.body.insertBefore(
    c.responseXML.firstChild, document.body.firstChild
  );
});
