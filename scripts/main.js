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

/*
$(() => {
    $('video').hover(function () {
        $(this).css('display', 'none')
    })
})
*/

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

//Works Movie
$(function() {
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

//show
var scrollreveal = {
    origin: 'bottom',
    distance: '50px',
    scale: 1,
    duration: 700,
    delay: 300,
    opacity: 0
}
ScrollReveal().reveal(".movies",scrollreveal);
