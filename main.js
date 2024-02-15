import './style/style.scss'

const body = document.querySelector('body');
const navHeader = document.querySelector('.header__nav');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const navLinks = document.querySelectorAll('.nav__link');

function openMenu() {
  body.classList.add('noscroll');
  navHeader.classList.remove('header__nav-close');
  navHeader.classList.add('header__nav-open');
}

function closeMenu() {
  body.classList.remove('noscroll');
  navHeader.classList.add('header__nav-close');
  navHeader.classList.remove('header__nav-open');
}

btnOpen.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 1110) {
      closeMenu();
    }
  })
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1110) {
    closeMenu()
  }
});