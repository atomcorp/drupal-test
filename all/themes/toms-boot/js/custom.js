(function ($) {
jQuery(document).ready(function($) {
	var $header = $('h1.page-header');
	var originalText = $header.text();
   	var $imgs = $('.view-my-front').find('img');
   	$('img').on({
   		mouseenter: function(event) {
   		event.preventDefault();
   		$this = $(this);
   		var text = $this.attr('alt');
   		$header.text(text);
   		},
   		mouseleave: function() {
   		$header.text(originalText);		
   		}
   	});

});
}(jQuery));