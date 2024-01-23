// ハンバーガーメニュー
document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');

    // JavaScriptで初期 max-height を設定
    if (navList.classList.contains('show')) {
        navList.style.maxHeight = navList.scrollHeight + "px";
    } else {
        navList.style.maxHeight = "0";
    }
});

// スクロールすると、pagetopボタンのフェードイン、フェードアウト
document.addEventListener("DOMContentLoaded", function(){
    // 変数名scrollButtonにclass名(.scroll)を一致させる↓
    var scrollButton = document.querySelector('.pagetop');

    //スクロールイベントを投入
    window.addEventListener('scroll', function () {
        if (window.scrollY > 700) {
            //スクロール量が指定より以上場合、visibleクラスを追加
            scrollButton.classList.add('visible');
        } else {
            //スクロール量が指定より以下だった場合、visibleクラスを削除
            scrollButton.classList.remove('visible');
        }
    });
});

//HTML文書が読み込まれたときにこの機能が発動する
document.addEventListener("DOMContentLoaded", function () {
    //変数名にid名topを取得し、格納する
    var pagetopButton = document.getElementById("top");

    pagetopButton.addEventListener("click", function (event) {
        //元々の機能を停止する
        event.preventDefault();

        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



// スクロールで画像のフェードイン
$(window).scroll(function(){
    const height = $(window).height(); //変数heightをウィンドウページの高さに設定
    const scroll = $(window).scrollTop(); //変数scrollを現在表示されている上からのページのスクロール位置を設定

    $(".fade-in-element").each(function(){
        //offsetは選択したドキュメントの位置情報、top＝上からの
        //つまり、選択したドキュメント"ここでは$(this)=fade-in-element"の上からの位置情報
        const imgPosition = $(this).offset().top;
        if(scroll > imgPosition - 750){
            $(this).addClass("fadeIn");
        }
    })
})