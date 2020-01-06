//ロード画面
$(function() {
    var h = $(window).height();
   
    $('#wrap').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','block');
});
$(window).load(function () {
    $('#loader-bg').delay(500).fadeOut(400);
    $('#loader').delay(400).fadeOut(100);
    $('#wrap').css('display', 'block');
});

//swiper
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

//スムーススクロール
$(function() {
    $('a[href^="#"]').click(function () { 
          var href = $(this).attr("href");
          var target = $(this.hash);
          if (!target.length) return ;
          var position = target.offset().top - 20;
          $('body,html').animate({scrollTop:position},350,'swing');
          return false;
    });
});

//player
$(function() {
    var h = $(window).height();
    $(".works_video").each(function() {
        $(this).click(function () {
            var player_src = $(this).attr("src");
            $("#player_play").attr('src', player_src);
            $('#player_bg ,#player').height(h).css('display','block');
            document.getElementById('player_id').load();
            document.getElementById('player_id').play();
        });
    });
});
$("#player_bg").click(function () {
    document.getElementById('player_id').pause();
    $('#player_bg').fadeOut(400);
    $('#player').fadeOut(100);
});

//contact
$(function() {
    $('.slidertitle').each(function () {
          $(this).click(function() {
                $(this).find('.plus').toggleClass("minus");
                $('++.slide',this).slideToggle(500);
                return false;
          });
    });
});