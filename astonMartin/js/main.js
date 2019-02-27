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
      //console.log(at3Offset, $(window).scrollTop());
      //console.log('도달');
      for(i=0; i<=8; i++) {
        $('.at3 .wrap').eq(i).delay(i*300).animate({'opacity':'1'},1000);
      }
    }
  })

  //pop-up option select
    const  state={
      'country':['SELECT DEALER'],
      'australia':['SELECT DEALER','ASTON MARTIN MELBOURNE','ASTON MARTIN PERTH','ASTON MARTIN QUEENSLAND','ASOTN MARTIN SYDNEY','SOLITAIRE ASTON MARTIN ADELAIDE'],
      'austria':['SELECT DEALER','ASTON MARTIN SALZBURG','ASTON MARTIN WIEN'],
      'azerbaijan':['ASTON MARTIN AZERBAIJAN'],
      'belgium':['SELECT DEALER','ASTON MARTIN ANTWERP','ASTON MARTIN BRUSSELS'],
      'brazil':['ASOTN MARTIN SAO PAULO'],
      'canada':['SELECT DEALER','ASTON MARTIN CALGARY','ASTON MARTIN MONTREAL','ASTON MARTIN ONTARIO','ASTON MARTIN TORONTO','ASTON MARTIN VANCOUVER'],
      'chile':['ASTON MARTIN SANTIAGO'],
      'china':['SELECT DEALER','ASTON MARTIN BEIJING SOUTH','ASTON MARTIN CHANGSHA','ASTON MARTIN CHENGDU','ASTON MARTIN GUANGZHOU','ASTON MARTIN GUIYANG','ASTON MARTIN HANGZHOU','ASTON MARTIN KUNMING','ASTON MARTIN NINGBO','ASTON MARTIN SHANGHAI','ASTON MARTIN SHENZHEN','ASTON MARTIN WUXI','ASTON MARTIN XIAMEN',"ASTON MARTIN XI'AN",'ASTON MARTIN ZHENGZHOU'],
      'denmark':['ASTON MARTIN COPENHAGEN'],
      'egypt':['ASTON MARTIN CAIRO'],
      'france':['SELECT DEALER','ASTON MARTIN BORDEAUX','ASTON MARTIN LE CANNET','ASTON MARTIN LYON','ASTON MARTIN PARIS'],
      'germany':['SELECT DEALER','ASTON MARTIN BERLIN','ASTON MARTIN DRESDEN','ASTON MARTIN DUSSELDORF','ASTON MARTIN HAMBURG','ASTON MARTIN KOLN','ASTON MARTIN KRONBERG','ASTON MARTIN MEMMINGEN','ASTON MARTIN MUNCHEN','ASTON MARTIN STUTTGART'],
      'greece':['ASTON MARTIN ATHENS'],
      'hongkong_sar':['ASTON MARTIN HONG KONG'],
      'india':['SELECT DEALER','ASTON MARTIN MUMBAI','ASTON MARTIN NEW DELHI'],
      'indonesia':['ASTON MARTIN JAKARTA'],
      'israel':['ASTON MARTIN ISRAEL'],
      'italy':['SELECT DEALER','ASTON MARTIN BOLOGNA','ASTON MARTIN MILAN','ASTON MARTIN VERONA'],
      'japan':['SELECT DEALER','ASTON MARTIN FUKUOKA','ASTON MARTIN HIROSHIMA','ASTON MARTIN NAGOYA HAKKO','ASTON MARTIN OSAKA HAKKO','ASTON MARTIN TOKYO'],
      'jordan':['ASTON MARTIN JORDAN'],
      'korea':['ASTON MARTIN KIHEUNG INTERNATIONAL'],
      'kuwait':['ASTON MARTIN KUWAIT'],
      'lebanon':['ASTON MARTIN BEIRUT'],
      'luxembourg':['ASTON MARTIN LUXEMBOURG'],
      'macao_sar':['ASTON MARTIN MANAU'],
      'malaysia':['ASTON MARTIN KUALA LUMPUR'],
      'mexico':['ASTON MARTIN MEXICO CITY'],
      'monaco':['ASTON MARTIN MONACO'],
      'netherlands':['SELECT DEALER','ASTON MARTIN EINDHOVEN','ASTON MARTIN HILVERSUM'],
      'new_zealand':['ASTON MARTIN AUCKLAND'],
      'norway':['ASTON MARTIN OSLO'],
      'oman':['ASTON MARTIN OMAN'],
      'peru':['ASTON MARITN LIMA'],
      'philippines':['ASTON MARTIN MANILA'],
      'poland':['ASTON MARITN WARSAW'],
      'portugal':['SELECT DEALER','ASTON MARTIN LISBON','ASTON MARTIN PORTO'],
      'qatar':['ASTON MARTIN QATAR'],
      'russia':['ASTON MARTIN MOSCOW'],
      'saudi_arabia':['ASTON MARTIN SAUDI ARABIA'],
      'singapore':['ASTON MARTIN SINGAPORE'],
      'south_africa':['SELECT DEALER','ASTON MARTIN CAPE TOWN','ASTON MARTIN SANDTON'],
      'spain':['SELECT DEALER','ASTON MARTIN BARCELONA','ASTON MARTIN MADRID','ASTON MARTIN VALENCIA'],
      'sweden':['ASTON MARTIN STOCKHOLM'],
      'switzerland':['SELECT DEALER','ASTON MARTIN CADENAZZO','ASTON MARTIN GENEVA','ASTON MARTIN SAFENWIL','ASTON MARTIN ST GALLEN','ASTON MARTIN ZURICH'],
      'taiwan':['ASTON MARTIN TAIPEI'],
      'thailand':['ASTON MARTIN BANGKOK'],
      'turkey':['SELECT DEALER','ASTON MARTIN IZMIR','ASTON MARTIN TURKEY'],
      'ukraine':['ASTON MARTIN KIEV'],
      'united_arab':['ASTON MARTIN DUBAI'],
      'united_kingdom':['SELECT DEALER','ASTON MARTIN BELEFAST','ASTON MARTIN BIRMINGHAM','ASTON MARTIN BIRENTWOOD','ASTON MARTIN BRISTOL','ASTON MARTIN CAMBRIDGE','ASTON MARTIN CHELTENHAM','ASTON MARTIN CHICHESTER','ASTON MARTIN EDINBURGH','ASTON MARTIN JERSEY','ASTON MARTIN LEEDS','ASTON MARTIN MAYFAIR','ASTON MARTIN NEWCASTLE','ASTON MARTIN NEWPORT PAGNELL','ASTON MARTIN NOTTINGHAM','ASTON MARTIN READING','ASTON MARTIN SEVENOAKS','ASTON MARTIN WALTON ON THAMES','ASTON MARTIN WELWYN','ASTON MARTIN WESTERN AVENUE','ASTON MARTIN WILMSLOW'],
      'united_states':['SELECT DEALER','ASTON MARTIN ATLANTA','ASTON MARTIN AUSTIN','ASTON MARTIN BEVERLY HILLS','ASTON MARTIN CLEVELAND','ASTON MARTIN DALLAS','ASTON MARTIN FORT LAUDERDALE','ASTON MARTIN GLENVIEW','ASTON MARTIN GREENSBORO','ASTON MARTIN LAS VEGAS','ASTON MARTIN LONG ISLAND','ASTON MARTIN LOS GATOS','ASTON MARTIN MINNEAPOLIS','ASTON MARTIN NAPLES','ASTON MARTIN NASHVILLE','ASTON MARTIN NEW ENGLAND','ASTON MARTIN NEWPORT BEACH','ASTON MARTIN ORANDO','ASTON MARTIN PALM BEACH','ASTON MARTIN RANCHO MIRAGE','ASTON MARTIN DIEGO','ASTON MARTIN SCOTTDALE','ASTON MARTIN ST LOUIS','ASTON MARTIN SUMMIT','ASTON MARTIN TAMPA BAY','ASTON MARTIN TROY','ASTON MARTIN WASHINGTON DC','F C KERBECK ASTON MARTIN','GALPIN ASTON MARTIN','MILLER MOTERCARS',"NAPLETON'S ASTON MARTIN",'PARK PLACE ASTON MARTIN','SILL-TERHAR ASTON MARTIN','STAR MOTOR CARS','THE COLLECTION']
    }
    $('#country').change(function(){
      const stateName=$(this).val();
      console.log(stateName);
      $('#select-dealer').empty();
      for (var i in state[stateName]){
        console.log(state[stateName][i]);
        $('#select-dealer').append('<option>' + state[stateName][i] + '</option>');
      }
    })

    var models={
      'models':['BODY STYLE'],
      'db11':['BODY STYLE','VOLANTE','COUPE'],
      'vanquish_s':['BODY STYLE'],
      'rapide_s':['BODY STYLE'],
      'zagato':['BODY STYLE'],
      'valkyrie':['BODY STYLE'],
      'vantage':['BODY STYLE'],
      'new_vantage':['BODY STYLE'],
      'dbs':['BODY STYLE'],
      'volante':['BODY STYLE'],
      'dbx':['BODY STYLE']
    }
    var engine={
      'models':['ENGINE'],
      'db11':['ENGINE','V12','V8'],
      'vanquish_s':['ENGINE'],
      'rapide_s':['ENGINE'],
      'zagato':['ENGINE'],
      'valkyrie':['ENGINE'],
      'vantage':['ENGINE'],
      'new_vantage':['ENGINE'],
      'dbs':['ENGINE'],
      'volante':['ENGINE'],
      'dbx':['ENGINE']
    }
    $('#models').change(function(){
      var modelsName=$(this).val();
      var engineName=$(this).val();
      $('#body-style').empty();
      $('#engine').empty();
      for (var i in models[modelsName]){
        $('#body-style').append('<option>' + models[modelsName][i] + '</option>');
      }
      for (var i in engine[engineName]){
        $('#engine').append('<option>' + engine[engineName][i] + '</option>');
      }
    })
});
