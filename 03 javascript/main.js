$(document).ready(function() {
	smoothScroll(400);
});

function smoothScroll (duration) {
	$("a[href^= '#']").click(function(event) {
		
		var target = $( $(this).attr("href") );

		if ( target.length ) {
			event.preventDefault();
			$("html , body").animate({
				scrollTop: target.offset().top
			} , duration );
		};

	});
};

























