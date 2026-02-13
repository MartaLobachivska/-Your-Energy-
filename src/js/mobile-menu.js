const mobileMenuBtn = document.querySelector('.JsOpenMenu');
const mobileMenuCloseBtn = document.querySelector('.JsCloseMenu');
const mobileMenu = document.querySelector('.JsMenuContainer');

mobileMenuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('IsOpen');
  document.body.style.overflow = 'hidden';
});

mobileMenuCloseBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('IsOpen');
  document.body.style.overflow = '';
});

