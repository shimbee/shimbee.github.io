$(function(){
    var windowH=$(window).height();
    var windowW=$(window).width();
    $('nav a').click(function(e){
        e.preventDefault();
        var i=$('nav a').index(this);
        var nowTop=$('section > article').eq(i).offset().top -60;
        //console.log(i, nowTop);
        $('html, body').stop().animate({
        'scrollTop':nowTop +'px'
        },1000);
    }) 
    
    $('.click').on('click',function(){
        $('html').stop().animate({'scrollTop':windowH},1000)
    })

    $(window).on('scroll',function(){
        var scrollTop=$(window).scrollTop();
        var i=0;
        if (windowW>768){ //pc
            if(scrollTop>=0 && scrollTop<1*windowH){//intro구간 범위
                i=0;
            }else if(scrollTop>=1*windowH && scrollTop<2*windowH){//about-me구간 범위
                i=1;
            }else if(scrollTop>=2*windowH && scrollTop<3*windowH){//portfolio구간 범위
                i=2;
            }else if(scrollTop=4*windowH){//contacts구간 범위
                i=3;
            }
        }else { //mobile
            if(scrollTop>=0 && scrollTop<0.35*windowH){//intro구간 범위
                i=0;
            }else if(scrollTop>=0.35*windowH && scrollTop<3.5*windowH){//about-me구간 범위
                i=1;
            }else if(scrollTop>=3.5*windowH && scrollTop<7.5*windowH){//portfolio구간 범위
                i=2;
            }else if(scrollTop=7.5*windowH){//contacts구간 범위
                i=3;
            }
        }
        $('nav li a').removeClass();
        $('nav li a').eq(i).addClass('active');
        }).scroll(); 


    $('.chart_html').easyPieChart({
        scaleColor: false,
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#f86300',
        trackColor:	"#ecf0f1",
        size: 130,
        animate: 500
    });
    $('.chart_css').easyPieChart({
        scaleColor: false,
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#4facfe',
        trackColor:	"#ecf0f1",
        size: 130,
        animate: 500
    });
    $('.chart_js').easyPieChart({
        scaleColor: false,
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#fee140',
        trackColor:	"#ecf0f1",
        size: 130,
        animate: 500
    });
    $('.chart_jq').easyPieChart({
        scaleColor: false,
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#2a5298',
        trackColor:	"#ecf0f1",
        size: 130,
        animate: 500
    });

    $(window).resize(function(){
        var imgH=$('.pic img').height();
        var picH=$('.pic').height();
        var transi=imgH-picH;
        $('.portfolio .pic').on({mouseenter:function(){
            $(this).children('img').css('marginTop',-transi);
            },mouseleave:function(){
            $(this).children('img').css('marginTop',0);
            }
        });
    }).resize();
    
    $('aside').css('opacity','0');
    $('aside').click(function(){
        $('html').stop().animate({'scrollTop':0},1500);
    })
    $(window).scroll(function(){
        if($(document).scrollTop() > 300){
            $('aside').css('opacity','1');
        }else {
            $('aside').css('opacity','0');
        }

        var windowW=$(window).width();
        var minus=0;
        if(windowW<768){
            minus=600;
        }else{
            minus=300;
        }
    })
    




});



