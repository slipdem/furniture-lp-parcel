gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline();

// LOADER
tlLoader
	.set('.loader__item', { yPercent: -100 })
	.set('.loader__title', { opacity: 0 })
	.to('.loader__item', {
		yPercent: 0,
		duration: 0.5,
		stagger: 0.25,
	})
	.to('.loader__item', {
		yPercent: 100,
		duration: 0.5,
		stagger: 0.25,
	})
	.to('.loader__title', {
		opacity: 1,
		duration: 1,
		scale: 1.2,
	})
	.set('.loader__item', {
		yPercent: -100,
	})
	.to('.loader__title', {
		opacity: 0,
		duration: 1,
		scale: 0.8,
	})
	.to(
		'.loader',
		{
			yPercent: -100,
			duration: 1,
		},
		'-=0.2',
	);

// laptop animations
const laptopScreen = window.matchMedia('(min-width: 992px)');
if (laptopScreen.matches) {
	// console.log(laptopScreen);

	// SECTION HERO
	gsap.to('.section__hero', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: 'top top',
			scrub: true,
		},
		css: {
			backgroundColor: '#10895a',
		},
	});

	gsap.to('.title__row-1', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: '-100 0',
			scrub: true,
		},
		css: {
			yPercent: -100,
		},
	});
	gsap.to('.title__row-2', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: '-100 0',
			scrub: true,
		},
		css: {
			yPercent: -170,
		},
	});
	gsap.to('.hero__svg', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: '-100 0',
			scrub: true,
		},
		css: {
			scale: 0.5,
			y: 50,
		},
	});
	gsap.to('.hero__image', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: '-100 0',
			scrub: true,
		},
		css: {
			scale: 1.2,
			y: -50,
		},
	});
	gsap.to('.hero__buttons', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: '-100 0',
			scrub: true,
		},
		css: {
			xPercent: 40,
			x: 100,
		},
	});

	// SECTION MATERIALS
	gsap.from('.materials__title', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-300 0',
		},
		y: 100,
		autoAlpha: 0,
		duration: 1,
	});
	gsap.from('.materials__text', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-300 0',
		},
		y: 150,
		autoAlpha: 0,
		duration: 1,
	});
	gsap.from('.materials__item .btn', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-200 0',
		},
		y: 50,
		autoAlpha: 0,
		duration: 1,
	});
	gsap.from('.products__img', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-200 0',
		},
		x: -100,
		opacity: 0,
		stagger: 0.2,
		duration: 1,
	});
	gsap.from('.products__info', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-200 0',
		},
		y: -50,
		opacity: 0,
		stagger: 0.2,
		duration: 1,
	});

	// SECTION CHOOSE
	const tlChoose = gsap.timeline();

	tlChoose
		.from('.section__choose', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '0 0',
				scrub: true,
				pin: true,
			},
		})
		.from('.section__choose .section__title', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-150 0',
				scrub: true,
			},
			y: 30,
		})
		.from('.section__choose .section__text', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-120 0',
				scrub: true,
			},
			y: 60,
		})
		.from('.section__choose .yellow-dots-bg', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '0 0',
				scrub: true,
			},
			scale: 0,
		})
		.from('.why__image', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '0 0',
				scrub: true,
			},
			css: {
				width: 0,
				height: '100%',
			},
		})
		.from('.why__item', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-200 0',
				scrub: true,
			},
			stagger: 0.25,
			y: 50,
			autoAlpha: 0,
		})
		.from('.why__icon circle', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-200 0',
				scrub: true,
			},
			stagger: 0.25,
			css: {
				fill: '#f9bf29',
				fillOpacity: 1,
			},
		})
		.from('.why__icon svg', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-200 0',
				scrub: true,
			},
			scale: 2,
		})

		// SECTION HELP
		.from('.help__img', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '0 center',
				scrub: true,
				// scroll while 300px
				end: '+=300',
			},
			xPercent: -30,
			duration: 1,
		})
		.from('.help__list li', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '50 center',
				scrub: true,
				end: '+=200',
			},
			stagger: 0.1,
			y: 80,
			x: 80,
			opacity: 0,
		})
		.from('.section__help .help__item', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '100 center',
				scrub: true,
				end: '+=150',
			},
			y: 80,
			autoAlpha: 0,
		})
		// SECTION EXAMPLES
		.from('.examples__item', {
			scrollTrigger: {
				trigger: '.section__examples',
				// triggers when section touch the viewport center
				start: '0 center',
				scrub: true,
				end: '+=250',
			},
			y: -100,
			autoAlpha: 0,
			stagger: 0.2,
		})
		// SECTION TESTIMONIALS
		.from('.section__testimonials', {
			scrollTrigger: {
				trigger: '.section__testimonials',
				start: '0 center',
				scrub: true,
				end: '+=250',
			},
			css: {
				backgroundColor: '#578573',
			},
		})
		.from('.section__testimonials .section__title', {
			scrollTrigger: {
				trigger: '.section__testimonials',
				start: '0 center',
				scrub: true,
				end: '+=150',
			},
			css: {
				color: 'white',
			},
		})
		.from('.section__testimonials .testimonials__text', {
			scrollTrigger: {
				trigger: '.section__testimonials',
				start: '0 center',
				scrub: true,
				end: '+=150',
			},
			css: {
				color: 'white',
			},
		})
		// SECTION BLOG
		.from('.section__blog .section__title', {
			scrollTrigger: {
				trigger: '.section__blog',
				start: '0 center',
				scrub: true,
				end: '+=150',
			},
			css: {
				xPercent: -250,
				color: '#3d5d50',
			},
		})
		.from('.section__blog .blog-link', {
			scrollTrigger: {
				trigger: '.section__blog',
				start: '0 center',
				scrub: true,
				end: '+=150',
			},
			css: {
				xPercent: 250,
				color: '#3d5d50',
			},
		})
		.from('.section__blog .post img', {
			scrollTrigger: {
				trigger: '.section__blog',
				start: '0 center',
				scrub: true,
				end: '+=250',
			},
			css: {
				height: 0,
			},
		})
		// SECTION BLOG
		.from('.footer__subscribe .footer__sofa', {
			scrollTrigger: {
				trigger: '.footer__subscribe',
				start: '30% center',
				scrub: 1,
			},
			x: 120,
			y: -30,
		});
}
