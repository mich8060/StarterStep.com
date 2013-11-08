$(document).ready(function(){
	
	$.fn.displayMessaging = function() {
		$el = $(this);
  		$el.animate({
			top: '0px'
		},300, 'ease-out');
		window.setTimeout(function(){
			$el.animate({
				top: '-70px'
			},300, 'ease-out');
		},5000);
	};
	
	if($('.presentation').length){
		$el = $('.presentation');
		var frame = 0;
		var cycle = window.setInterval(function(){
			if(frame < 2){
				$el.removeClass('frame-'+frame);
				frame++;
				$el.addClass('frame-'+frame);
			}else{
				$el.removeClass('frame-'+frame);
				frame = 0;
				$el.addClass('frame-'+frame);
			}
		},5000);
	}
	
	if($('#notification').length){
		$('#notification').submit(function(e){
			$.ajax({
			  	type: 'POST',
			  	url: '/startstep/test.php',
			  	data: $(this).serialize(),
			  	dataType: 'html',
			  	timeout: 5000,
			  	success: function(){
					$('.message-success').displayMessaging();
			  	},
			  	error: function(){
			    	$('.message-error').displayMessaging();
			  	}
			});
			e.preventDefault();
		});
	}

});