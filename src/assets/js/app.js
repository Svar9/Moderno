$(function () {


    //= components/slick.js
    //= components/mixitup.js
    //= components/rateyo.js
    

    /* document.querySelector('.menu__btn').onclick = function() {
        document.querySelector('.menu__btn').classList.toggle('active');
        document.querySelector('.menu__items').classList.toggle('active');
    }; */


    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('active');
        $('.menu__items').toggleClass('active');
    });

    var mixer = mixitup('.products__inner--box');

    $('.rate-star').rateYo({
        rating: 5
      });


})