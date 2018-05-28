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


const stickySidebar = () => {
  if(!document.querySelector('.Typical__sidebar')) return null

  const boxes = [...document.querySelectorAll('.Typical__box')];
  const containers = [...document.querySelectorAll('.Typical__container')];
  containers[0].style.height = containers[0].querySelector('.Typical__links').clientHeight + 24 + 'px';

  boxes.forEach(box => box.onclick = () => {
    const content = box.querySelector('.Typical__links');
    const container = box.querySelector('.Typical__container');
    containers.forEach(c => {
      c.style.height = '';
    });
    container.style.height = content.clientHeight + 'px'
  })
  var sidebar = new StickySidebar('.Typical__sidebar', {
    containerSelector: '.Typical__wrapper',
    innerWrapperSelector: '.Typical__sidebar_inner',
    topSpacing: 20,
    bottomSpacing: 20
  });

}
stickySidebar();

const mobileMenu = () => {
  const hamburger = document.querySelector('.Hamburger');
  const close = document.querySelector('.i-Menu__close');
  const menu = document.querySelector('.i-Menu');
  const items = [...document.querySelectorAll('.i-Menu__item')];
  items.forEach( el => el.onclick = () => menu.style.transform = '');
  hamburger.onclick = () => (menu.style.transform = 'translateY(100%)', document.body.style.overflow='hidden')
  close.onclick = () => (menu.style.transform = '', document.body.style.overflow='')
}
mobileMenu()



const openTypicalMenu = function(){
  if(!document.querySelector('.Typical__box_wrap')) return null
  const wrapper = document.querySelectorAll('.Typical__menu_box');
  const header = document.querySelector('.Typical__menu_box .Typical__label');
  const height = header.clientHeight;

  wrapper.forEach(e => {
    e.style.height = height + 'px';
    e.onclick = () => {
      if(e.classList.contains('Typical__menu_box_active')) e.style.height = height + 'px';
      else e.style.height = e.scrollHeight + 'px';
      e.classList.toggle('Typical__menu_box_active');
    }
  })
  //wrapper[0].style.height = wrapper[0].scrollHeight + 'px';
}
openTypicalMenu();
