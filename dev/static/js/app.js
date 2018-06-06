// Начальная функция

(function(){
	$(".navigation").waypoint(function() {
		$(this.element).addClass("viewed");
	},{offset: '100%'});
	$(".doing").waypoint(function() {
		$(this.element).addClass("viewed");
	},{offset: '100%'});

	function scrollNav() {
		$('.js-scroll-to').on("click", function(){  
			//Animate
			$('html, body').stop().animate({
					scrollTop: $( $(this).attr('href') ).offset().top - 100
			}, 400);
			return false;
		});
	}
	scrollNav();
})();