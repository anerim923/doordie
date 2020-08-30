$(document).ready(function(){

    var $listBox = $('#listBox');
    var $ul = $('#listBox ul');
    var $li = $('#listBox ul li')
    var $next = $('.btnNext');
    var $prev = $('.btnPrev');
    var speed = 1000;
    var wid = $("#listBox ul li").outerWidth();
	var num = $("#listBox li").length;
	var totalWid = wid*num;
	$($ul).width(totalWid);
	var mleft = 0;
	var timer = setInterval(move,speed);
    
    

	$($listBox).on("mouseenter",function(){
		clearInterval(timer);
	});
	
	$($listBox).on("mouseleave",function(){
		timer = setInterval(move,speed);
	});
	
	$($prev).on("click",function(e){
		e.preventDefault();
		$($li).last().prependTo($ul);
	});
	
	$($next).on("click",function(e){
		e.preventDefault();
		$($li).first().appendTo($ul);
	});
	
	function move(){
		mleft -=2;
		if(mleft < -wid){
			$("#listBox ul li").first().appendTo("#listBox ul");
			mleft = 0;
		}
		$("#listBox ul").css({"left":mleft});
	}

    
    init('data/slider.json', $listBox);

    function init(url, target){
        $.ajax({
            url : url,
            dataType : 'json'
        })
        .success(function(data){
            createDOM(data.data, target)
            console.log(data.data);
        })
        .error(function(){
            alert('Fail to Load Data!!');
        })
    }

    function createDOM(data, target){

        //create <ul>
        target
            .append(
                $('<ul>')
                    .css({
                        width:'2000px', height: '100%', position:'absoulte', bottom: '0px', left: '0px', boxSizing:'border-box'
                    })
            )

        //loop <li>
        $(data).each(function(){
            target.children('ul')
                .append(
                    $('<li>')
                        .css({
                            width:'200px', height: '130px', boxSizing : 'border-box', 
                            backgroundRepeat: 'noRepeat', backgroundPosition: 'center', backgroundSize: 'cover',
                            filter: 'grayscale(1)', transition:'0.5s', backgroundImage : 'url(../img/' + this.bgImg, float:'left'
                        })
                )

        })


    }

});
