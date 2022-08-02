$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		easing: 'leniar',
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		waitForAnimate: true,
		touchThreshold: 10
	});
});



$(document).ready(function () {
	$('.header__burger,.header__link').click(function (event) {
		$('.header__burger,.header__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


const aboutUs = document.querySelector(".about__us");
const services = document.querySelector(".plus__1");
const conatct = document.querySelector(".conatct__1");

aboutUs.onclick = function setScrollIntoViewOptions(top) {
	const aboutTitle = document.querySelector('.about__title');
	aboutTitle.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth",
	});
};

services.onclick = function setScrollIntoViewOptions(top) {
	const navTitle = document.querySelector('.nav__title');
	navTitle.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth",
	});
};

conatct.onclick = function setScrollIntoViewOptions(top) {
	const footerTitle = document.querySelector('.footer');
	footerTitle.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth",
	});
};



