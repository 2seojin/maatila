$(document).ready(function(){
    //메인메뉴에 마우스오버했을때 서브메뉴 나타남
    $('nav > ul > li').hover(function(){
        $(this).find('.sub').stop().fadeIn();
    },
    //메인메뉴에서 마우스아웃시 서브메뉴 사라짐
    function(){
        $(this).find('.sub').stop().fadeOut();
    });

    //mySwiper1 (슬라이드)
    var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 0,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        autoplay: {
            delay: 4000,
            isableOnInteraction: false
        }
    });

    //탭메뉴
    //모든 내용 숨김
    $('.tab_con > div').hide();
    //첫번째 내용만 보임
    $('.tab_con > div:first').show();
    //탭제목에 클릭이벤트 설정
    $('.tab_title ul li').click(function(e){
        //a태그의 속성을 막아주는 코드
        e.preventDefault();
        //클릭한 메뉴(li)의 인덱스번호를 num변수에 저장
        var num=$(this).index();
        //모든 탭제목에서 active 제거
        $('.tab_title ul li a').removeClass('active');
        //클릭한 탭제목에 active 설정
        $(this).find('a').addClass('active')
        //모든 내용 숨김
        $('.tab_con > div').hide();
        //클릭한 제목(li)와 같은 인덱스번호를 가진 내용만 보임
        $('.tab_con > div').eq(num).show();
    });
    //mySwiper2 (슬라이드)
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        }
    });
    //mySwiper3 (슬라이드)
    var swiper = new Swiper(".mySwiper3", {
        effect:'fade',
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        }
    });
    //윈도우에 스크롤 이벤트 설정
    $(window).scroll(function(){
        //브라우저에서 html문서의 scrollTop값을 인식하여 winTop변수에 저장
        //$(this)는 scroll이벤트가 발생한 객체(window)를 가리킴
        var winTop=$(this).scrollTop();
        console.log(winTop);
        //offset().top => scrollTop()으로부터 떨어져 있는 거리
        //s2영역의 위쪽 위치값을 구해서 scroll1변수에 저장
        var scroll1=$('section.s2').offset().top-600;
        //s3영역의 위쪽 위치값을 구해서 scroll2변수에 저장
        var scroll2=$('section.s3').offset().top-600; 
        //s4영역의 위쪽 위치값을 구해서 scroll3변수에 저장
        var scroll3=$('section.s4').offset().top-600; 
        //s5영역의 위쪽 위치값을 구해서 scroll4변수에 저장
        var scroll4=$('section.s5').offset().top-600; 
        //s6영역의 위쪽 위치값을 구해서 scroll5변수에 저장
        var scroll5=$('section.s6').offset().top-600; 

        //만약 .s2영역이 보이면, && ('그리고' 라는 뜻의 논리 연산자)조건 2개 모두 true일 때 실행
        if(scroll1 < winTop && winTop < scroll2){
            $('section.s2 h1').addClass('active');
            $('section.s2 p').addClass('active');
            $('section.s2 .swiper').addClass('active');
        }
        //만약 .s3영역이 보이면, && ('그리고' 라는 뜻의 논리 연산자)조건 2개 모두 true일 때 실행
        if(scroll2 < winTop && winTop < scroll3){
            $('section.s3 h1').addClass('active');
            $('section.s3 p').addClass('active');
            $('section.s3 .tab').addClass('active');
            $('section.s3 .view_btn').addClass('active');
        }
        //만약 .s4영역이 보이면, && ('그리고' 라는 뜻의 논리 연산자)조건 2개 모두 true일 때 실행
        if(scroll3 < winTop && winTop < scroll4){
            $('section.s4 h1').addClass('active');
            $('section.s4 p').addClass('active');
            $('section.s4 .gallery').addClass('active');
            $('section.s4 .s4_right').addClass('active');
        }
        //만약 .s5영역이 보이면, && ('그리고' 라는 뜻의 논리 연산자)조건 2개 모두 true일 때 실행
        if(scroll4 < winTop){
            $('section.s5 h1').addClass('active');
            $('section.s5 p').addClass('active');
            $('section.s5 .vlog').addClass('active');
        }
        
    });
});