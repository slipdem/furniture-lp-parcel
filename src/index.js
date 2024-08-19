// SWIPER
const swiper = new Swiper('.swiper', {
	spaceBetween: 100,
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
// GSAP
document.addEventListener('DOMContentLoaded', (event) => {
	gsap.registerPlugin(ScrollTrigger);
});

// SMOOTH SCROLL
function burgerMenu() {
	const burger = document.querySelector('.burger'),
		menu = document.querySelector('.menu'),
		menuItems = document.querySelectorAll('.menu li');

	burger.addEventListener('click', function () {
		menu.classList.toggle('active');
		burger.classList.toggle('active');
	});

	menuItems.forEach(function (item) {
		item.addEventListener('click', function () {
			menu.classList.remove('active');
			burger.classList.remove('active');
		});
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth > 992) {
			menu.classList.remove('active');
			burger.classList.remove('active');
		}
	});
}

burgerMenu();
let scroll = new SmoothScroll('a[href*="#"]');
