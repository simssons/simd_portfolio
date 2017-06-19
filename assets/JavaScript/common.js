$(function(){


    //menu관련
    var autoHeight = function(){
        $('.menu-main-menu-container .fifty').height(($('.menu-main-menu-container').height()-90)/2)

    }
    $(window).resize(function(){
        autoHeight();
            console.log($('.menu-main-menu-container').height());
    })

    $('.menu a').click(function(event){
        event.preventDefault();
        console.log('ss');

        var menuToggle = $('.menu-main-menu-container')

        if (menuToggle.is('.on')) {
            menuToggle.removeClass('on')
            $(this).text('menu')
            $('.gnb-inner div a').css('color','black')
        }else{
            menuToggle.addClass('on')
            $(this).text('back')
            $('.gnb-inner div a').css('color','white')
        }
        autoHeight();
    })

});
