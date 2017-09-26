$(function(){
    var _scrollTop;
    /*$('.js-more').on('click', function(e){
        e.preventDefault();
        _scrollTop= $(window).scrollTop();
        var top = $(window).height()*0.1;
        var height = $(window).height()*0.8;
        $('.js-close').show();
        $(".popup").css({
            'height':  height+ 'px',
            'top':top+'px'
        });
        $('.bg-black').show();
        $(".popup").show();
        $('body, html').css({
            'overflow':'hidden',
            'height': '100%'
        });
        
    });
    $(".js-close").on('click', function(e){
        $(this).hide();
        $('.bg-black').hide();
        $(".popup").hide();
        $('body, html').css({
            'overflow':'auto',
            'height': ''
        });

        $(window).scrollTop(_scrollTop);
    });
    

    $(".popup").mCustomScrollbar({
        autoHideScrollbar:true,
    });*/

    $('.js-more').on('click', function(){
        _scrollTop= $(window).scrollTop();
        var winHeight = $(window).height()*0.8;
        var _winHeight = $(window).height()*0.75;
        var top = $(window).height()*0.1;
        $('.c-popup-wrapper').show();
        $('.js-bg').show();
        $('body, html').css({
            'overflow': 'hidden',
            'height': '100%'
        });
        $('.c-popup-wrapper').css({
            'top':top+'px',
            'height':winHeight+'px'
        });
        $('.c-popup').css({
            'height':_winHeight+'px'
        });
    });

    $('.js-close-btn').on('click', function(){
        $('.c-popup-wrapper').hide();
        $('.js-bg').hide();
        $('body, html').css({
            'overflow':'auto',
            'height': ''
        });
        $(window).scrollTop(_scrollTop);
    });

    //set scrollbar for popup
    $('.c-popup').mCustomScrollbar({
        autoHideScrollbar:true,
    });

});