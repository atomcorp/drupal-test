(function ($) {
jQuery(document).ready(function($) {

   	var $imgs = $('.view-my-front').find('img');
   	$('h2').on('click', function(event) {
   		event.preventDefault();
   		console.log('y');
   	});

});
}(jQuery));