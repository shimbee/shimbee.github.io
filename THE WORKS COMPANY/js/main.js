$(function(){
    var swiper1 = new Swiper('.slide .swiper-container', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop:true
        });
        
        var swiper2 = new Swiper('.slide2 .swiper-container', {
            spaceBetween: 30,
            effect: 'fade',
            autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop:true
        });
});