$(function(){
    
    $(window).on('scroll', function(){
       if ($(window).scrollTop()){
           $('nav').addClass('shrink');
       }else{
        $('nav').removeClass('shrink');
       }
    });

    $(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('.nav-menu').addClass('fallow');
        }else{
         $('.nav-menu').removeClass('fallow');
        }
     });

     $('.burger').on('click', function(){
         console.log('hey====>');
         $('.nav-menu').toggleClass('togg');
     });
});
