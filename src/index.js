const swiper = new Swiper('.swiper', {
	// Optional parameters
	spaceBetween: 100,
	slidesPerView: 1,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
