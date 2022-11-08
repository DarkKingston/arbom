$('select').niceSelect();



const portfolioSliderPrice = new Swiper('.reviews-slider', {

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {


  	992: {
  		slidesPerView: 3,
  	},

  	560: {
  		slidesPerView: 2,
  	},

  	300: {
  		slidesPerView: 1,
      spaceBetween: 15,
    }

  },


});




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


$('[data-fancybox="gallery"]').fancybox({ });



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







$(document).ready(function(){
  // Добавить плавную прокрутку до всех ссылок
  $('a[href^="#"]').on('click', function(event) {

    // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
    if (this.hash !== "") {
      // Запретить поведение щелчка якоря по умолчанию
      event.preventDefault();

      // Хранить хэш
      var hash = this.hash;

      // Использование метода animate() jQuery для добавления плавной прокрутки страницы
      // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){

        // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
        window.location.hash = hash;
      });
    } // Конец, если
  });
});