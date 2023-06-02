$(function(){
    //로고 클릭시 최상단
    $(".logo").on("click",function(){
        $("html, body").stop().animate({scrollTop:0},400);
    });
    //하단 클릭시 최상단
    $(".btntop").on("click",function(){
        $("html, body").stop().animate({scrollTop:0},400);
    });
    //하단 버튼이 스크롤 500픽셀 도달시 나타남
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".btntop").fadeIn();
        }else{
            $(".btntop").fadeOut();
        }
    });

    var menu = $(".menu>ul>li");
    var con = $("#contents>div");
    menu.click(function(){
        var tg = $(this);
        var i = tg.index(); //.index는 순서값
        var section = con.eq(i);
        var top = section.offset().top;
        $("html,body").stop().animate({scrollTop:top});
    });
});




//각 메뉴 클릭시 애니메이션으로 각 컨텐츠위치이동
