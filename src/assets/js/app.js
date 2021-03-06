$(function () {


  //= components/slick.js
  //= components/mixitup.js
  //= components/jquery.rateyo.js


  /* document.querySelector('.menu__btn').onclick = function() {
      document.querySelector('.menu__btn').classList.toggle('active');
      document.querySelector('.menu__items').classList.toggle('active');
  }; */


  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('active');
    $('.menu__list').slideToggle();
  });

  $('.header__btn--menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });


  $('.rate-star').rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });



  $('.product-slider__inner').slick({
    dots: true,
    arrow: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  var mixer = mixitup('.products__inner--box');
})