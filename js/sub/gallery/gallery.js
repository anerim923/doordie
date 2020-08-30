$(document).ready(function(){

    var $grid;

    setTimeout(function(){
        $('.g_inner').addClass('on');
        $grid = $('.g_inner').isotope({
            itemSelector : '.g_inner>div',
            columnWidth : '.g_inner>div',
            transitionDuration : '0.8s',
            percentPosition : true
        });
    },1000);

    $('.filter>li').on('click',function(e){
        e.preventDefault();
        var sort = $(this).children('a').attr('href');
        $grid.isotope({
            filter : sort
        });

        $('.filter>li').removeClass('on');
        $(this).addClass('on');
    });
  
    

});
