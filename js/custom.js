
(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	

	var tinySdlier = function() {

		var heroSlider = document.querySelectorAll('.hero-slide');
		var propertySlider = document.querySelectorAll('.property-slider');
		var imgPropertySlider = document.querySelectorAll('.img-property-slide');
		var testimonialSlider = document.querySelectorAll('.testimonial-slider');
		

		if ( heroSlider.length > 0 ) {
			var tnsHeroSlider = tns({
				container: '.hero-slide',
				mode: 'carousel',
				speed: 700,
				autoplay: true,
				controls: false,
				nav: false,
				autoplayButtonOutput: false,
				controlsContainer: '#hero-nav',
			});
		}


		if ( imgPropertySlider.length > 0 ) {
			var tnsPropertyImageSlider = tns({
				container: '.img-property-slide',
				mode: 'carousel',
				speed: 700,
				items: 1,
				gutter: 30,
				autoplay: true,
				controls: false,
				nav: true,
				autoplayButtonOutput: false
			});
		}

		if ( propertySlider.length> 0 ) {
			var tnsSlider = tns({
				container: '.property-slider',
				mode: 'carousel',
				speed: 700,
				gutter: 30,
				items: 3,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#property-nav',
				responsive: {
					0: {
						items: 1
					},
					700: {
						items: 2
					},
					900: {
						items: 3
					}
				}
			});
		}


		if ( testimonialSlider.length> 0 ) {
			var tnsSlider = tns({
				container: '.testimonial-slider',
				mode: 'carousel',
				speed: 700,
				items: 3,
				gutter: 50,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#testimonial-nav',
				responsive: {
					0: {
						items: 1
					},
					700: {
						items: 2
					},
					900: {
						items: 3
					}
				}
			});
		}
	}
	tinySdlier();


	// Welcome modal: show on load and wire up buttons
	window.addEventListener('load', function() {
		try {
			var modal = document.getElementById('welcome-modal');
			var btnAcc = document.getElementById('btn-accommodations');
			var btnContact = document.getElementById('btn-contact');
			var btnClose = document.getElementById('welcome-close');

			if (!modal) return;

			// small delay so loader finishes then modal appears
			setTimeout(function(){ modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); }, 350);

			// click outside to close
			modal.addEventListener('click', function(e){
				if (e.target === modal) {
					modal.classList.remove('show'); modal.setAttribute('aria-hidden','true');
				}
			});

			if (btnClose) btnClose.addEventListener('click', function(){ modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); });

			if (btnAcc) btnAcc.addEventListener('click', function(){
				modal.classList.remove('show');
				window.location.href = 'properties.html';
			});

			if (btnContact) btnContact.addEventListener('click', function(){
				modal.classList.remove('show');
				window.location.href = 'contact.html';
			});
		} catch (err) {
			// fail silently if anything goes wrong
			console.error('Welcome modal error:', err);
		}
	});

	// Theme toggle: persist in localStorage and apply across pages


})();