// Начальная функция

(function(){
	$(".navigation").waypoint(function() {
		$(this.element).addClass("viewed");
	},{offset: '100%'});
	$(".doing").waypoint(function() {
		$(this.element).addClass("viewed");
	},{offset: '100%'});
	$(".works").waypoint(function() {
		$(this.element).addClass("viewed");
	},{offset: '100%'});

	function scrollNav() {
		$('.js-scroll-to').on("click", function(){
			//Animate
			$('html, body').stop().animate({
					scrollTop: $( $(this).attr('href') ).offset().top
			}, 400);
			return false;
		});
	}
	scrollNav();

	function labelHide() {
		$('.contact__input').each(function() {
			$(this).focus(function() {
					$(this).siblings('.contact__label').addClass('hide');
			});
			$(this).blur(function(){
					if(!($(this).val())){
							$(this).siblings('.contact__label').removeClass('hide')
					};
			});
		});
	}
	labelHide()

})();
$(document).ready(function () {
    svg4everybody({});
});
// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();