
(function($) {

	var	$window = $(window),
		$body = $('body');


	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');


	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500
			});

})(jQuery);
