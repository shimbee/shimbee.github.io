$(function(){
    var windowH=$(window).height();
    $('nav a').click(function(e){
        e.preventDefault();
        var i=$('nav a').index(this);
        var nowTop=i*windowH;
        console.log(i, nowTop);
        $('html').stop().animate({
        'scrollTop':nowTop
        },1000)
    })
    $(window).on('scroll',function(){
        var scrollTop=$(window).scrollTop();
        for (var i = 0; i < 5; i++) {
            if(scrollTop>=i*windowH && scrollTop<(i+1)*windowH){
                $('nav li a').removeClass();
                $('nav li a').eq(i).addClass('active');
            }
        }
    }).scroll();
    $('article').on('mousewheel',function(e, delta){
        if(delta>0){
            if($(this).prev().is('article')){
                var prev=$(this).prev().offset().top;
                $('html').stop().animate({
                    scrollTop:prev
                },1000)
                console.log('올림', prev);
                }
            }else if(delta<0){
                if($(this).next().is('article')){
                var next=$(this).next().offset().top;
                $('html').stop().animate({
                    scrollTop:next
                },1000)
                console.log('내림', next);
                }
            }
            })
    $('.chart').easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#1abc9c',
        trackColor:	"#ecf0f1",
        size: 160,
        animate: 500
    });


})


function initMap() {
    var uluru = {center:new google.maps.LateLng(37.490953, 127.100166),zoom:5,};
    var map = new google.maps.Map(document.getElementById('map'),uluru);
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
