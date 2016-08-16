$(function(){
	$('#blue').css('transform','translateX(240%) rotate(360deg)');
	$('#blue').css('transition','transform 500ms cubic-bezier(0.92,0.92,0.96,0.93) 0ms');
	// $('#green').css('transform','translateX(240%) rotate(360deg)');
	// $('#green').css('transition','transform 600ms linear 0ms');
	// $('#green').css('transform','translateX(331%) rotate(360deg)');
	// $('#green').css('transition','transform 230ms ease-out 0ms');
	$('#green').css('transform','translateX(331%) rotate(360deg)');
	$('#green').css('transition','transform 690ms cubic-bezier(0.9,0.9,0.96,0.91) 0ms');
	$('#yellow').css('transform','translateX(421%) rotate(360deg)');
	$('#yellow').css('transition','transform 868ms cubic-bezier(0.9,0.9,0.96,0.91) 0ms');
	$('#orange').css('transform','translateX(511%) rotate(360deg)');
	$('#orange').css('transition','transform 1067ms cubic-bezier(0.92,0.92,0.96,0.93) 0ms');
	$('#pink').css('transform','translateX(600%) rotate(360deg)');
	$('#pink').css('transition','transform 1260ms cubic-bezier(0.92,0.92,0.96,0.93) 0ms');

	$('#top').css('z-index','4');
	var timer = null;
	$('#android').mouseover(function(){
		clearInterval(timer);
		var i = parseInt($('#hide').css('top'));
		timer = setInterval(function()
		{
			i+=5;
			if(i >= 51)
			{
				$('#hide').css('top','51px');
				clearInterval(timer);
			}
			else{
				$('#hide').css('top',''+i+'px');
			}
			// $('#hide').css('z-index','0');
		},0.01);
	}).mouseout(function(){
		// clearInterval(timer2);
		var i = parseInt($('#hide').css('top'));
		timer2 = setInterval(function()
		{
			i-=5;
			if(i <= -159)
			{
				$('#hide').css('top','-159px');
				// clearInterval(timer);
				clearInterval(timer2);
				$('#hide').css('z-index','-1');
			}
			else
			{
				$('#hide').css('top',''+i+'px');				
			}
		},0.01);
	})
})