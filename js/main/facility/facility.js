$(document).ready(function(){
    var $wrap = $('#facility');
    var $panel = $wrap.find('.tab>li');
    var $bg = $wrap.find('.bg>li');
    var $btn = $wrap.find('.btn>li');

    $btn.on('click',function(e){
        e.preventDefault();

        var i = $(this).index();

        $btn.children('a').removeClass('on');
        $btn.eq(i).children('a').addClass('on');

        $panel.stop().fadeOut();
        $panel.eq(i).stop().fadeIn();

        $bg.removeClass('on');
        $bg.eq(i).addClass('on');
    })
})