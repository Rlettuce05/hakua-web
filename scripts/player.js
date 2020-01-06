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