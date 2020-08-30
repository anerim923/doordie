$(document).ready(function(){

	var wid = $(".list li").outerWidth();
	var num = $(".list li").length;
	var totalWid = wid*num;
	$(".list").width(totalWid);
	var mleft = 0;
	
	var timer = setInterval(move,20);
	
	$("#listBox").on("mouseenter",function(){
		clearInterval(timer);
	});
	
	$("#listBox").on("mouseleave",function(){
		timer = setInterval(move,20);
	});
	
	$(".btnPrev").on("click",function(e){
		e.preventDefault();
		$(".list li").last().prependTo(".list");
	});
	
	$(".btnNext").on("click",function(e){
		e.preventDefault();
		$(".list li").first().appendTo(".list");
	});
	
	function move(){
		mleft -=2;
		if(mleft < -wid){
			$(".list li").first().appendTo(".list");
			mleft = 0;
		}
		$(".list").css({"left":mleft});
	}
	

	
});