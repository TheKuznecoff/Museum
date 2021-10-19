const sliderNumber = document.querySelector('._number-active')

const swiper = new Swiper('.image-slider', {

    direction: 'horizontal',
    loop: true,
    speed: 800,

    pagination: {
      el: '.swiper-pagination',
		clickable: true,
      bulletClass: 'dot',
      bulletActiveClass: 'dot-active',
    },

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    autoplay: {
		// Пауза между прокруткой
		delay: 2000,
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
})

swiper.on('slideChangeTransitionStart', function () {
    let result
    if (swiper.activeIndex > 5) {
        result = 1
    } else if (swiper.activeIndex === 0) {
        result = 5
    } else {
        result = swiper.activeIndex
    }
    sliderNumber.innerHTML = '0' + result
})