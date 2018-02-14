/*****************
      Script
******************/

var config = {
	speed: 5000,
	autoplay: false,
	dots: true
}; 
var counter = 1;
$(document).ready(function(){
	var noOfSlides = 3;
   
    
    $('.iSlider .iSliderItem').hide();
	$('.iSlider .iSliderItem:nth-of-type('+ counter +')').show();
	
	if(config.autoplay){
       setInterval( function() {
		   counter++;
		   checkCounter();
		   $('.iSlider .iSliderItem').hide();
		   $('.iSlider .iSliderItem:nth-of-type('+ counter +')').show();
	  }, config.speed);
	}

	$('.fullContainer .next').on('click', function(){
		counter++;
		checkCounter();
		var prevCounter = (counter === 1 ? noOfSlides : counter -1);
		$('.iSlider .iSliderItem:nth-of-type('+ prevCounter +')').hide(); 
		$('.iSlider .iSliderItem:nth-of-type('+ counter +')').show();   
	});

	$('.fullContainer .prev').on('click', function(){
	   counter--; 
	    if(counter < 1){
	    	$('.iSlider .iSliderItem:nth-of-type('+ 1 +')').hide(); 
	        $('.iSlider .iSliderItem:nth-of-type('+ noOfSlides +')').show(); 
	        counter = noOfSlides; 
	   } 
	   $('.iSlider .iSliderItem:nth-of-type('+ (counter + 1) +')').hide(); 
	   $('.iSlider .iSliderItem:nth-of-type('+ counter +')').show(); 
	});

	function checkCounter() {
		if( counter > noOfSlides) {
			counter = 1;
		}
	}

    function appendDots(){
       $o = '<ol class="slider-indicators">';
       for(var i = 1; i <= noOfSlides; i++){
          $o += '<li class="dots" data-showSlide='+ i +'></li>'
       }
       $o += '</ol>';
       return $o;
    }

	if(config.dots){
       $('.iSlider').after( appendDots());
       $('.slider-indicators .dots:first-of-type').addClass('active');
       $('.slider-indicators .dots').on('click', function(){
       	   counter = parseInt($(this).data('showslide'));
       	   $('.slider-indicators .dots').removeClass('active');
       	   $(this).addClass('active');
       	   $('.iSlider .iSliderItem').hide(); 
       	   $('.iSlider .iSliderItem:nth-of-type('+ counter +')').show();
       });
	}
});
