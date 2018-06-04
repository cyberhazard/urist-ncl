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


var sendMail = function sendMail(selector) {
  return fetch('/mail.php', {
    method: 'POST',
    body: new FormData(selector)
  }).then(r => {
    if(r.status != "200") throw Error(r.statusText)
  }).catch(function (error) {
    alertify.error("Ошибка. Повторите отправку позже");
    throw Error(error)
    modal.close()
  });
};

const callBackFormSend = () => {
  if(!document.querySelector('.SectionTop__form')) return null
  const forms = document.querySelectorAll('.SectionTop__form');
  forms.forEach(form => {
    form.onsubmit = (e) => {
      e.preventDefault();
      sendMail(form).then(_ => (alertify.success("Ваша заявка отправленна"), document.querySelector('.call__form').reset()))
    }
  })

};
callBackFormSend();

const modalSend = () => {
  if(!document.querySelector('.SectionTop__form')) return null
  const forms = document.querySelectorAll('.SectionTop__form');
  forms.forEach(form => {
    form.onsubmit = (e) => {
      e.preventDefault();
      sendMail(form).then(_ => (alertify.success("Ваша заявка отправленна"), form.reset(), modal.close()))
    }
  })
  console.log(22)
};


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

const blogButtons = () => {
  if(!document.querySelector('.Blog__buttons')) return null
  const tabs = [...document.querySelectorAll('.Blog__button')]
  const contents = [...document.querySelectorAll('.i-Blog__hidden')]
  tabs.forEach((tab,i)=>{
    tab.onclick = ({target}) =>{
      tabs.forEach(tab=>tab.classList.remove('Blog__button_active'))
      target.classList.add('Blog__button_active')
      contents.forEach(el=>el.classList.remove('i-Blog__hidden_active'))
      contents[tabs.findIndex(el=>el===target)].classList.add('i-Blog__hidden_active')
    }
  })
}
blogButtons();



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

var modal = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['call', 'modal'],
  beforeOpen: function(){
    modalSend();
  }
});

var callBackWrap = () => {
  return`
        <form class="SectionTop__form">
          <div class="SectionTop__form_inner">
            <div class="SectionTop__form_title">Оставьте заявку:</div>
            <div class="SectionTop__form_elem">
              <div class="SectionTop__form_elem_inner">
                <input class="SectionTop__form_input" type="text" name="name" placeholder="Ваше имя"/>
              </div>
            </div>
            <div class="SectionTop__form_elem">
              <div class="SectionTop__form_elem_inner">
                <input class="SectionTop__form_input" type="tel" name="phone" placeholder="Ваш телефон"/>
              </div>
            </div>
            <div class="SectionTop__form_elem">
              <div class="SectionTop__form_elem_inner">
                <textarea class="SectionTop__form_textarea" type="text" name="text" placeholder="Ваше сообщение"></textarea>
              </div>
            </div>
            <button class="SectionTop__form_button" type="submit">Отправить</button>
          </div>
        </form>
    `
};

var callBack = function(){
const callBackButton = Array.prototype.slice.call(document.querySelectorAll('.callback'));
if(!callBackButton) return null;
callBackButton.forEach((el) => el.onclick = function(e){
  e.preventDefault();
  modal.setContent(callBackWrap());
  modal.open();
})
}
callBack();

const team = [
  {
    id:0,
    name: 'Nicos Clerides',
    role: 'Chairman and Head, Global Asset Management and Legal',
    text:'Sir Christopher Pissarides is an external adviser with NCL Corporate Services. He is the Regius Professor of Economics at the London School of Economics, a Professor of European Studies at the University of Cyprus and Chairman of the Council of National Economy of the Republic of Cyprus, and the Helmut & Anna Pao Sohmen Professor-at-Large of the Hong Kong University of Science and Technology. Sir Christopher was awarded the 2010 Nobel Prize in Economics for his work in the economics of markets with frictions. Prior to that, in 2005, he became the first European economist to win the IZA Prize in Labor Economics. He is frequently quoted in the press on issues concerning the Eurozone and the future of European integration. He is an elected Fellow of the British Academy, the Academy of Athens, the Academia Europaea and several other learned societies, and he is a Lifetime Honorary Member of the American Economic Association. In 2011 he served as the President of the European Economic Association. In 2011 he received the Grand Cross of the Republic of Cyprus, the highest honour of the Republic. He was knighted in 2013.'
  },
  {
    id:1,
    name: 'Nicos Clerides1',
    role: 'Chairman and Head, Global Asset Management and Legal',
    text:'Sir Christopher Pissarides is an external adviser with NCL Corporate Services. He is the Regius Professor of Economics at the London School of Economics, a Professor of European Studies at the University of Cyprus and Chairman of the Council of National Economy of the Republic of Cyprus, and the Helmut & Anna Pao Sohmen Professor-at-Large of the Hong Kong University of Science and Technology. Sir Christopher was awarded the 2010 Nobel Prize in Economics for his work in the economics of markets with frictions. Prior to that, in 2005, he became the first European economist to win the IZA Prize in Labor Economics. He is frequently quoted in the press on issues concerning the Eurozone and the future of European integration. He is an elected Fellow of the British Academy, the Academy of Athens, the Academia Europaea and several other learned societies, and he is a Lifetime Honorary Member of the American Economic Association. In 2011 he served as the President of the European Economic Association. In 2011 he received the Grand Cross of the Republic of Cyprus, the highest honour of the Republic. He was knighted in 2013.'
  },
  {
    id:2,
    name: 'Nicos Clerides2',
    role: 'Chairman and Head, Global Asset Management and Legal',
    text:'Sir Christopher Pissarides is an external adviser with NCL Corporate Services. He is the Regius Professor of Economics at the London School of Economics, a Professor of European Studies at the University of Cyprus and Chairman of the Council of National Economy of the Republic of Cyprus, and the Helmut & Anna Pao Sohmen Professor-at-Large of the Hong Kong University of Science and Technology. Sir Christopher was awarded the 2010 Nobel Prize in Economics for his work in the economics of markets with frictions. Prior to that, in 2005, he became the first European economist to win the IZA Prize in Labor Economics. He is frequently quoted in the press on issues concerning the Eurozone and the future of European integration. He is an elected Fellow of the British Academy, the Academy of Athens, the Academia Europaea and several other learned societies, and he is a Lifetime Honorary Member of the American Economic Association. In 2011 he served as the President of the European Economic Association. In 2011 he received the Grand Cross of the Republic of Cyprus, the highest honour of the Republic. He was knighted in 2013.'
  },
  {
    id:3,
    name: 'Nicos Clerides3',
    role: 'Chairman and Head, Global Asset Management and Legal',
    text:'Sir Christopher Pissarides is an external adviser with NCL Corporate Services. He is the Regius Professor of Economics at the London School of Economics, a Professor of European Studies at the University of Cyprus and Chairman of the Council of National Economy of the Republic of Cyprus, and the Helmut & Anna Pao Sohmen Professor-at-Large of the Hong Kong University of Science and Technology. Sir Christopher was awarded the 2010 Nobel Prize in Economics for his work in the economics of markets with frictions. Prior to that, in 2005, he became the first European economist to win the IZA Prize in Labor Economics. He is frequently quoted in the press on issues concerning the Eurozone and the future of European integration. He is an elected Fellow of the British Academy, the Academy of Athens, the Academia Europaea and several other learned societies, and he is a Lifetime Honorary Member of the American Economic Association. In 2011 he served as the President of the European Economic Association. In 2011 he received the Grand Cross of the Republic of Cyprus, the highest honour of the Republic. He was knighted in 2013.'
  },
]

const teamWrap = ({name,role,text}) => {
  return`
    <div class="Team__modal">
      <div class="Team__modal_name">${name}</div>
      <div class="Team__modal_role">${role}</div>
      <div class="Team__modal_text">${text}</div>
    </div>
  `
}

var teamHandle = function(){
  const readButtons = document.querySelectorAll('.i-Team__more');
  if(!readButtons) return null;
  readButtons.forEach((el) => el.onclick = function(e){
    e.preventDefault();
    modal.setContent(teamWrap(team.find(member => member.id == el.dataset.id )));
    modal.open();
  })
}
teamHandle();

void function secondaryMenu() {
  const buttons = [...document.querySelectorAll('.Header__dropdown')];
  if (buttons.length === 0) return null;
  const menus = [...document.querySelectorAll('.SecodaryMenu')];
  buttons.forEach((button, index) => button.onclick = (e) => {
    e.stopPropagation();
    menus.forEach(menu => menu != menus[index] && menu.classList.remove('active'))
    menus[index].classList.toggle('active')
    if(menus[index].classList.contains('active')) (document.body.onclick = () => (menus[index].classList.remove('active'), document.body.onclick = ''))
    else (document.body.onclick = '')
  })
  menus.forEach(menu => menu.querySelector('.SecodaryMenu__container').onblur = () => menu.classList.remove('active'))
}()
