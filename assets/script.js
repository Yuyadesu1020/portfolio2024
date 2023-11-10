$(function(){
    // ページトップ
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function(){
        if ($(this).scrollTop()>1700){
            pagetop.fadeIn();
        }else{
            pagetop.fadeOut();
        }
    });
    pagetop.click(function(){
        $('body,html').animate({scrollTop: 0},300)
        return false;
    });

    // 文字拡大
    $(document).ready(function(){
        $(".zoom").hover(function(){
            $(this).css("transform","scale(1.2)"); //1.2倍に拡大
            $(this).css("transition", "transform 0.2s"); //0.2秒で変化する
        },
        function(){
            $(this).css("transform", "scale(1)"); //マウスアウトで元のサイズに戻る
        });
    });

    //ハンバーガーメニュー
    $(document).ready(function() {
        $('.hamburger-menu').click(function() {
          $('.menu').slideToggle(); /* メニューの表示と非表示を切り替える */
        });
      });

    //フェードイン
    $(window).scroll(function(){
        //ウィンドウの高さ
        const height = $(window).height();
        //スクロールした量
        const scroll = $(window).scrollTop();
        $(".fade-in-element").each(function(){
            const imgPosition = $(this).offset().top;
            if(scroll > imgPosition - 800){
                $(this).addClass("fadeIn");
            }
        });
    });
});