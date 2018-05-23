void function() {
  const slider = document.querySelector('.i-Slider__slider');
  if (!slider) return null;
  new Swiper(slider, {
    spaceBetween: 300,
    speed: 700,
    navigation: {
      nextEl: '.i-Slider__button_right',
      prevEl: '.i-Slider__button_left',
    },
  })
}()


const detailNewsButtons = () => {
  if(!document.querySelector('.i-News__buttons')) return null
  const tabs = [...document.querySelectorAll('.i-News__button')]
  const contents = [...document.querySelectorAll('.i-News__slide')]
  tabs.forEach((tab,i)=>{
    tab.onclick = ({target}) =>{
      tabs.forEach(tab=>tab.classList.remove('i-News__button_active'))
      target.classList.add('i-News__button_active')
      contents.forEach(el=>el.classList.remove('i-News__slide_active'))
      contents[tabs.findIndex(el=>el===target)].classList.add('i-News__slide_active')
    }
  })
}
detailNewsButtons();
