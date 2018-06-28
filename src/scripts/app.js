$(document).ready(function() {
	'use strict';

	var headerHeight = $('header').outerHeight(),
		windowHeight = $(window).height(),
		windowWidth = $(window).width();

	$('#banner p').addClass('show');


	// ===============================================================
	/* SCROLL WINDOW */
	// ===============================================================
	$(window).scroll(function(e) {
		if ($(window).scrollTop() >= $('#sobre').offset().top - headerHeight) {
			$('header').addClass('change');
			$('header .menu a.active').removeClass('active');
			$('header .menu a[href=#sobre]').addClass('active');
			$('#sobre .imagem').addClass('show');
		} else {
			$('header').removeClass('change');
			$('header .menu a[href=#sobre]').removeClass('active');
		}

		if ($(window).scrollTop() >= $('#metodologia').offset().top - headerHeight) {
			$('header .menu a.active').removeClass('active');
			$('header .menu a[href=#metodologia]').addClass('active');
			$('#metodologia .itens>div').addClass('active');

			if ($(window).scrollTop() >= $('#metodologia .itens').offset().top - headerHeight) {
				$('#metodologia .img-smartphone').addClass('active');
			}
		} else {
			$('header .menu a[href=#metodologia]').removeClass('active');
		}

		if ($(window).scrollTop() >= $('#produtos').offset().top - headerHeight) {
			$('header .menu a.active').removeClass('active');
			$('header .menu a[href=#produtos]').addClass('active');
		} else {
			$('header .menu a[href=#produtos]').removeClass('active');
		}

		if ($(window).scrollTop() >= $('#contato').offset().top - headerHeight) {
			$('header .menu a.active').removeClass('active');
			$('header .menu a[href=#contato]').addClass('active');
		} else {
			$('header .menu a[href=#contato]').removeClass('active');
		}
	});


	// ===============================================================
	/* EXIBIR MENU MOBILE */
	// ===============================================================
	$('.link-menu-mobile').click(function(e){
		e.preventDefault();

		if ($('.menu').hasClass('active')) {
			$('.menu').removeClass('active');
			$('.logo').removeClass('transparent');
			$('.overlay').removeClass('show');
		} else {
			$('.menu').addClass('active');
			$('.logo').addClass('transparent');
			$('.overlay').addClass('show');
		}
	});


	// ===============================================================
	/* CLIQUE ITENS DO MENU */
	// ===============================================================
	$('header .menu a, .scroll').click(function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $( ( $(this).attr('href') || '').split('?')[0] ).offset().top + 'px'
		},'slow');

		$('.menu').removeClass('active');
		$('.logo').removeClass('transparent');
		$('.overlay').removeClass('show');

		return false;
	});


	// ===============================================================
	/* SLIDER */
	// ===============================================================
	$('#sobre .itens').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false
	});

	if(windowWidth < 960) {
		$('#metodologia .itens').slick({
			dots: true,
			arrows: false,
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}]
		});

		$('#produtos .container').slick({
			dots: true,
			arrows: false,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	}
});