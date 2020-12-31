$(() => {
    // 画面にロード画面をオーバーレイ
    var h = $(window).height();

    $('#wrap').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','block');

    // contact画面を開くやつ
    $('.slidertitle').each(function () {
        $(this).click(function() {
              $(this).find('.plus').toggleClass("minus");
              $('++.slide',this).slideToggle(500);
              return false;
        });
    });

    // 作品のポップアップ
    var player
    $(".lity_atag").each(function() {
        $(this).click(function () {
            player = $(this).attr("id").split("_")[0]
            document.getElementById(`${player}_movie`).load();
            document.getElementById(`${player}_movie`).play();
        });
    });
    $(document).on('click','.lity-wrap', function () {
        document.getElementById(`${player}_movie`).pause();
    });

    //topのmarginを変更
    var width = $(window).width();
    $(".pagetop").css('height', `${(width/16)*9-86}px`);
})

// ロード終了後ロード画面からフェードアウト
$(window).load(() => toggleMainPage());

// メインページを表示
const toggleMainPage = () => {
    $('#loader-bg').delay(500).fadeOut(400);
    $('#loader').delay(400).fadeOut(100);
    $('#wrap').css('display', 'block');
}

// swiperjsの設定
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    autoHeight: true,
});

// scrollreveal
var scrollreveal = {
    origin: 'bottom',
    distance: '50px',
    scale: 1,
    duration: 700,
    delay: 300,
    opacity: 0
}
