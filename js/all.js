$(document).ready(function(){
	$(window).scroll(function(event){
        var scrollVal=$(this).scrollTop();
        if(scrollVal >150){
            $('.top').fadeIn();
        }else{
            $('.top').fadeOut();
        }
	})
	/*-- swiper --*/
	var Vegetmain = new Swiper ('.Veget-main', {
		direction:'horizontal',
		loop:true,
		simulateTouch:false,
		slidesPerView: 'auto',
		spaceBetween: 30,
		speed:1000,
		effect:'coverflow',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},
		autoplay: {
			disableOnInteraction: false,
			delay: 3000,
		},
	})
	var Vegetrestaurant = new Swiper ('.Veget-restaurant', {
		direction:'horizontal',
		simulateTouch:true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		speed:1000,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	var Vegetsnack = new Swiper ('.Veget-snack', {
		direction:'horizontal',
		simulateTouch:true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		speed:1000,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	/*image zoom */
	/*-- question-list --*/
	$('.question h3').click(function(event){
        //點選到的 h3 亮起，其他h3移除active樣式
        $(this).toggleClass('active');
        //點選到的 h3 找到父元素，再找裡面的 P 判斷收闔
		$(this).parent().find('p').stop().fadeToggle();
		$(this).parent().find('ul').stop().fadeToggle();
        //自己以外的 p 隱藏
		$(this).parent().siblings().find('p').slideUp();
		$(this).parent().siblings().find('ul').slideUp();
        //自己以外的 h3 移除樣式
        $(this).parent().siblings().find('h3').removeClass('active');
	})
	/*-- restaurant ani--*/
	$('.res-but').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:$('#rast-active').offset().top
        }, 1000);
	}); 
	/*-- snack ani--*/
	$('.snack-but').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:$('#snack-active').offset().top
        }, 1000);
	}); 
	/*-- question ani--*/
	$('.que-but').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:$('.question').offset().top
        }, 1000);
	}); 	
	/*--top animate--*/
    $('.top a,.logo-footer a').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });    
})