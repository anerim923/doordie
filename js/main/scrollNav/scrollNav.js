$(document).ready(function(){	

	var pos1 = $('#header').offset().top;
	var pos2 = $('#intro').offset().top;
	var pos3 = $('#staff').offset().top;
    var pos4 = $('#comments').offset().top;
    var pos5 = $('#scrollbox').offset().top;
    var pos6 = $('#brand').offset().top;
	var base = -300;

	$(window).on('scroll', function(){

		if(scroll >= pos1+base && scroll <pos2+base){
			$('#navi li').removeClass('on');
			$('#navi li').eq(0).addClass('on');
			$(' ').removeClass('on');
			$(' ').eq(0).addClass('on');
		}
		if(scroll >= pos2+base && scroll <pos3+base){
			$('#navi li').removeClass('on');
			$('#navi li').eq(1).addClass('on');
			$('#wrap div').removeClass('on');
			$('#wrap div').eq(1).addClass('on');
			
		}
		if(scroll >= pos3+base && scroll <pos4+base){
			$('#navi li').removeClass('on');
			$('#navi li').eq(2).addClass('on');
			$('#wrap div').removeClass('on');
			$('#wrap div').eq(2).addClass('on');
        }
        if(scroll >= pos4+base && scroll <pos5+base){
			$('#navi li').removeClass('on');
			$('#navi li').eq(3).addClass('on');
			$('#wrap div').removeClass('on');
			$('#wrap div').eq(3).addClass('on');
        }
		if(scroll >= pos6+base){
			$('#navi li').removeClass('on');
			$('#navi li').eq(4).addClass('on');
			$('#wrap div').removeClass('on');
			$('#wrap div').eq(4).addClass('on');
		}
	});

	$('#navi li').on('click', function(){
		var i = $(this).index();
		var target = $().eq(i).offset().top;
		$('html,body').stop().animate({scrollTop : target}, 1000);

	});
});