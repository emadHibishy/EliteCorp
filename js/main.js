$(function(){
    let headerHeight= $('header').innerHeight();
    let windowHeight= $(window).height();
    $('.slider,.carousel-item').height(windowHeight - headerHeight);

    // featured work 
    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        const target = $(this).data('target');
        if(target === 'all'){
            $('.featured-work .imgs .col-sm').css('opacity',1);
        }else{
            $('.featured-work .imgs .col-sm').css('opacity',0.09);
            $(target).parent('.col-sm').css('opacity',1);
        }
    });

    // giving why choose us section image height == caption section
    if($(window).width() > 976){
        $('.choose-us .image img').height($('.choose-us .caption').innerHeight());
    }
});