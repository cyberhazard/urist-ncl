void function() {
  const slider = document.querySelector('.i-Slider__slider');
  if (!slider) return null;
  new Swiper(slider, {
    spaceBetween: 100,
    navigation: {
      nextEl: '.i-Slider__button_right',
      prevEl: '.i-Slider__button_left',
    },
  })
}()
