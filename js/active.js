(function($){'use strict';if($.fn.owlCarousel){$(".testimonials-slides").owlCarousel({items:1,loop:true,autoplay:true,smartSpeed:1500,margin:5,nav:true,navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']})}
$('#search-btn, #closeBtn').on('click',function(){$('body').toggleClass('search-form-on');});if($.fn.barfiller){$('#bar1').barfiller({tooltip:true,duration:1000,animateOnResize:true});$('#bar2').barfiller({tooltip:true,duration:1000,animateOnResize:true});$('#bar3').barfiller({tooltip:true,duration:1000,animateOnResize:true});$('#bar4').barfiller({tooltip:true,duration:1000,animateOnResize:true});}
if($.fn.scrollUp){$.scrollUp({scrollSpeed:1500,scrollText:'<i class="fa fa-angle-up" aria-hidden="true"></i>'});}
if($.fn.sticky){$("#header").sticky({topSpacing:0});}
if($.fn.magnificPopup){$('.video--play--btn').magnificPopup({disableOn:0,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:true,fixedContentPos:false});}
$("a[href='#']").on('click',function($){$.preventDefault();});if($.fn.init){new WOW().init();}
if($.fn.matchHeight){$('.item').matchHeight();}
var $window=$(window);$window.on('load',function(){$('#preloader').fadeOut('slow',function(){$(this).remove();});});})(jQuery);