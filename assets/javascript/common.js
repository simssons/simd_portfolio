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

        var $menuToggle = $('.menu-main-menu-container');
        var $blogList = $('body.blog_list');
        var $aColor = $('.gnb-inner div a');


        if ($menuToggle.is('.on')) {
            $menuToggle.removeClass('on');
            $(this).text('menu');
            if ($('html').has('.menuColor')) {
                $aColor.css('color','');
                console.log('흰');
            }else {
                $aColor.css('color','black');
                console.log('검');
            }
        }else{
            $menuToggle.addClass('on');
            $(this).text('back');
            $aColor.css('color','white');
        }
        autoHeight();
    })

});
