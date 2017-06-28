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

        var menuToggle = $('.menu-main-menu-container');
        var blogList = $('body.blog_list');

        if (menuToggle.is('.on')) {
            menuToggle.removeClass('on');
            $(this).text('menu');
            if (true) {

            }

            $('.gnb-inner div a').css('color','black');
        }else{
            menuToggle.addClass('on');
            $(this).text('back');
            $('.gnb-inner div a').css('color','white');
        }
        autoHeight();
    })

});
