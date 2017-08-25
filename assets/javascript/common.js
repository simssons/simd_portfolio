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
            $('html').css('overflow-y', '')
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
            $('.gnb-inner div.share ul .share_facebook').css({
              'background-image': 'url(../assets/image/facebook-icon-white.svg)'
            });
            $('.gnb-inner div.share ul .share_twitter').css({
              'background-image': 'url(../assets/image/twitter-icon-white.svg)'
            });
            $('.gnb-inner div.share ul .share_google_plus').css({
              'background-image': 'url(../assets/image/g-plus-icon-white.svg)'
            });
            $('html').css('overflow-y', 'hidden');
            $(this).text('back');
            $aColor.css('color','white');
        }
        autoHeight();
    })

});
