$(function(){

  //scroll_bar
  $('.scrollbar-inner').scrollbar();


  // header search
  $('.btn-search').click(function(){
    $('header > form').show();
    $('.btn-search').hide();
    $('header').append('<div class="bg"></div>');
  })
  $('header').on('click','.bg',function(){
    $('header > form').hide();
    $('.btn-search').show();
    $('.bg').remove();
  })
  $('.mobile-close').click(function(){
    $('header > form').hide();
    $('.btn-search').show();
    $('.bg').remove();
  })

  //menu
  $('#btn-menu').change(function(){
    $('nav').toggle();
    $('.btn-search').toggle();
    $('.enquiry').toggle();
    if($(this).prop('checked')) {
      $('body').css('overflow','hidden');
      $('.scroll-wrapper').css('display','block');
    }else{
      $('body').css('overflow','');
      $('.scroll-wrapper').css('display','none');
    }
  })

  $('.gnb > li > a').click(function(e){
    e.preventDefault();
    $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    $(this).next().stop().slideToggle();
  })



  //menu - pop-up
  $('.enquiry').click(function(){
    $('.pop-up').show();
    $('body').css('overflow','hidden');
  })
  $('.pop-up-close').click(function(){
    $('.pop-up').hide();
  })

  //swiper
  var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop:true
  })

  //at2
  //at3 .wrap-size
  $(window).resize(function(){
    //nav scroll_bar height값
    var windowH=$(window).height();
    var navH=$(window).height()-120;
    $('.scrollbar-inner').height(navH);

    var windowW=$(window).width();
    var modelsH=$('.models li').height();
    $('.models .discover').height(modelsH - 40);

    $('.standard').removeAttr('style');
    var standardH=Math.floor($('.standard').height());
    // console.log(standardH);
    $('.standard, .box1, .box4, .box7').height(standardH);
    if(windowW<768){
      $('.box5, .box6, .box8, .box9').height(standardH/2-5);
    }else{
      $('.box5, .box6, .box8, .box9').height(standardH/2-25);
    }
  }).resize();

  //scroll-top
  $('aside').click(function(){
    $('html').stop().animate({'scrollTop':0},1500)
  })
  $('aside a').css('opacity','0');
  $(window).scroll(function(){
    var windowW=$(window).width();
    var windowH=$(window).height();
    var navH=$(window).height()-120;
    $('.scrollbar-inner').height(navH);

    if($(document).scrollTop() > 300) {
      $('aside a').css('opacity','1');
    }else {
      $('aside a').css('opacity','0');
    }

    var minus=0;
    if(windowW<768){
      minus=600;
    }else{
      minus=300;
    }
    var at3Offset=$('.at3').offset().top;
    if($(window).scrollTop() > at3Offset-minus) {
      console.log(at3Offset, $(window).scrollTop());
      console.log('도달');
      for(i=0; i<=8; i++) {
        $('.at3 .wrap').eq(i).delay(i*300).animate({'opacity':'1'},1000);
      }
    }
  })
})
