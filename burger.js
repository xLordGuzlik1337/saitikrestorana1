const header = document.querySelector(".header");
const navLinks = document.querySelector('.nav-links');
const menuToggle1 = document.querySelector('.burger');

menuToggle1.addEventListener('click', () => { 
  header.classList.toggle('header-active'); // Показать/скрыть шапку при клике на бургер
  navLinks.classList.toggle('nav-active'); // Показать/скрыть меню при клике на бургер

});
