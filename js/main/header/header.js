$(document).ready(function(){

     // 브라우저 로딩시 rwd호출
     rwd();

     //브라우저가 리사이즈 될때마다 rwd()호출
     $(window).on('resize',function(){
        rwd();
     });

     //gnb 1depth에 마우스오버시 버튼 활성화 유지
      //gnb 1depth에 마우스오버시 버튼 활성화 유지
    $('#gnb>li').on('mouseenter',function(){
        $(this).children('a').addClass('on')
    });

    $('#gnb>li').on('mouseleave',function(){
        $(this).children('a').removeClass('on')
    });

    //브라우저 넓이값에 따른 다른 이벤트함수 연결
    function rwd(){
        var wid = $(window).width();

        //웹
        if(wid>=1179){
            $('#gnbMo').removeClass('on');
            $('#header').on('mouseenter',function(){
                $('#gnb ul').show();
                $('.bgGnb').show();
            });
            $('#header').on('mouseleave',function(){
                $('#gnb ul').hide();
                $('.bgGnb').hide();
            });

        //타블릿 이하
        }else {
            $('#header').off('mouseenter');
            $('#header').off('mouseleave'); 
        }
    }

    //btnCall 클릭시
    $('.fa-bars').on('click',function(){
        var isOpen = $('#gnbMo').hasClass('on');

        if(isOpen){
            $('#gnbMo').removeClass('on')
        }else{
            $('#gnbMo').addClass('on');
        }
    })

    $('#gnbMo>ul>li>a').on('click',function(e){
        e.preventDefault();

        $('#gnbMo>ul>li>a').removeClass('on');
        $('#gnbMo>ul>li>ul').slideUp();

        $(this).addClass('on');
        $(this).next('ul').slideDown();
    });
    

    //포커스 이벤트 연결 (탭키 누르면서 포커스 이동)
    $('#gnb>li>a').on('focusin',function(){
        $('.bgGnb').show();
        $('#gnb>li>ul').show();
    });

    $('#gnb a').last().on('focusout',function(){
        $('.bgGnb').hide();
        $('#gnb>li>ul').hide();
    });

    
    // $('#gnb>li').on('mouseenter',function(){
    //     $(this).children('ul').show();
    //     $(this).children('a').addClass('on');
    // });
    // $('#gnb>li').on('mouseleave',function(){
    //     $(this).children('ul').hide();
    //     $(this).children('a').removeClass('on');
    // });
});