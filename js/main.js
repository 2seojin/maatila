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
});