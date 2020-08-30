$(document).ready(function(){	

    console.log(document.cookie);

    //처음 로딩시 쿠키가 있으면 팝업을 숨김, 없으면 보임
    var cookiedata = document.cookie;

    
    if(cookiedata.indexOf('today=done')<0){
        //쿠키가 없을떄 실행할 구문
        $('aside').show();
    }else{
        //쿠키가 있을떄 실행할 구문
        $('aside').hide();
    }    


    //닫기 버튼 클릭시
    $('.close').on('click',function(){

        if($('#ck').is(':checked')){
            setCookie('today','done',1);
        }
        $('aside').fadeOut();
    }); 

    //쿠키 삭제버튼 클릭시
    $('.del').on('click',function(){
        setCookie('today','done',0);
    });
   

    //쿠키생성 함수
    function setCookie(name,value,expiredays){
        var today = new Date();
        var duedate = today.getDate() + expiredays;
        today.setDate(duedate);
        var result = today.toGMTString();
        // today=done; path=/; expires=날짜,시간
        document.cookie = name+'='+value+'; path=/; expires='+result+';'  
    }
});

/*
    배열.indexOf(값);
    해당배열에서 값에 해당하는 배열값의 순번을 찾아줌
    만약 해당 값이 배열에 없으면 -1을 반환
    var abc = ['apple','melon','strawberry'];
    var num = abc.indexOf('berry');
    console.log(num);
*/
