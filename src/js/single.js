$(document).ready(function () {
  $(".tel").mask("+7 (999) 999-99-99");
});


let modal = document.querySelector(".modal"),
closePopup = $(".close-modal"),
modalBtn = $(".open-popup");

modalBtn.click(function() {
  modal.classList.add("fadeIn");
  $("body").toggleClass("overflow-hidden");
});


closePopup.click(function() {

  modal.classList.remove("fadeIn");
  modal.classList.add("fadeOut");

  $("body").toggleClass("overflow-hidden");

  modal.addEventListener('animationend', function() {
    modal.classList.remove("fadeOut");
  });

});
var link = $('.menu-icon__block');
var link_active = $('.menu-link_active');
var menu = $('.menu');
var nav_link = $('.menu navbar li a[href^="#"]');

link.click(function () {
  link.toggleClass('menu-icon__active');
  menu.toggleClass('menu-active');
});

nav_link.click(function () {
  link.removeClass('menu-icon__active');
  menu.toggleClass('menu-active');
});