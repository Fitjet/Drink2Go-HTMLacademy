const page = document.querySelector('.page');
const headerMain = page.querySelector('.header');
const headerButton = headerMain.querySelector('.user-nav__button--switch');

page.classList.remove('page--nojs');
headerMain.classList.remove('header--nav-opened');

headerButton.addEventListener('click', () =>
  headerMain.classList.toggle('header--nav-opened')
);


const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  touchRatio: 1.5,
  speed: 800,
  centeredSlides: true,
});


const map = L.map('map').setView([59.968347, 30.317407], 18);
const greenIcon = L.icon({
  iconUrl: '../img/icons/stack.svg#other-map-pin',
  iconSize:     [38, 50],
  iconAnchor:   [19, 48]
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker([59.968347, 30.317407], {icon: greenIcon}).addTo(map);
