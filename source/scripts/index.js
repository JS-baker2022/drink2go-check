/* в этот файл добавляет скрипты*/
import Swiper from '../vendor/swiper/swiper';

new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  lazy: true, // включаем отложенную загрузку изображений

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }

  ,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  ,
});

const menu = document.querySelector('.header__navigation');
const menuButton = document.querySelector('.header__navigation-burger');

menuButton.onclick = function() {
  menu.classList.toggle('header__navigation--is-open');
  menu.classList.toggle('header__navigation--is-close');
};
