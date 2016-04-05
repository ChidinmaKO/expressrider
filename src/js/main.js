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
	// Custom button for iPicture moreblack
	$('.pinbutton').css('background','url(dist/images/button.png) no-repeat scroll left center transparent');
	// Priority+ Nav
	priorityNav('.js-headerNav', 'a', 920, 122);
	window.addEventListener('resize', function(){
		priorityNav('.js-headerNav', 'a', 920, 122);
	});
	$('body').click(function(){ $('#forgone').hide(); })
	$(document).on('click', '#pNav', function(){
		if($('#forgone').length > 0){
			if($('#forgone').css('display') === 'none')
				$('#forgone').show();
			else
				$('#forgone').hide();
		}else{
			$(this).closest('.js-headerNav').after('<nav class="forgone" id="forgone"></nav>')
			$(this).siblings('a').filter(':hidden').each(function(index){
				$('#forgone').append(this);
			});
			$('#forgone').show();
			$('#forgone > *').show();
		}
	});
	// Append SVG
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild);
	// Submit search by clicking search icon
	$('[aria-label=Submit]').click(function(){
		$(this).closest('form').submit();
	});
});
/**
 * PriorityNav
 * @author Joseph Rex (joerex101)
 * @since 12-04-2015
 * @arg menuParent string
 * @arg menuChildren string - classname, tagname or id
 * @arg maxBreakpoint int - maximum width for priorityNav
 * @arg menuWidth int - width of individual menus on smaller viewport
 */
function priorityNav(menuParent, menuChildren, maxBreakpoint, menuWidth){
	var screenWidth = document.documentElement.clientWidth;
	if(screenWidth < maxBreakpoint){
		var menuCount = $(menuParent).children(menuChildren).length,
		    menuWidths = menuWidth * menuCount;
		if(menuWidths > screenWidth){
			var menusLeft = Math.floor(screenWidth / menuWidth),
			plusSpace = screenWidth - menuWidth * menusLeft,
			plusValue = plusSpace > 80 ? 'More +' : '+',
			priorityNav = '<a href="javascript:void(0)" id="pNav" style="width:'+plusSpace+'px">'+plusValue+'</a>';
			$(menuParent + ' '+ menuChildren +':nth-child(n+'+(menusLeft + 1)+')').hide();
			if(!$('#pNav').length)
				$(menuParent).append(priorityNav);
			else if($('#pNav').css('display') === 'none')
				$('#pNav').show(function(){ $(this).text(plusValue); $(this).css('width',plusSpace); });
		}
	}
}