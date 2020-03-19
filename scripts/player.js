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

//works toggle
$(function () {
    $("#jisyu").click(function () {
        $("#alpha").slideUp(500);
        $("#kagi").slideUp(500);
        $("#suside").slideDown(500);
        $("#reel2019").slideDown(500);
        $("#enma").slideUp(500);
        $("#egorock").slideDown(500);
        $("#NSNL").slideUp(500);
        $("#echo").slideDown(500);
        $("#kutyubunkai").slideDown(500);
        $("#hare5").slideUp(500);
    });
    $("#genkai").click(function () {
        $("#alpha").slideDown(500);
        $("#kagi").slideDown(500);
        $("#suside").slideUp(500);
        $("#reel2019").slideUp(500);
        $("#enma").slideUp(500);
        $("#egorock").slideUp(500);
        $("#NSNL").slideDown(500);
        $("#echo").slideUp(500);
        $("#kutyubunkai").slideUp(500);
        $("#hare5").slideDown(500);
    });
    $("#gassaku").click(function () {
        $("#alpha").slideUp(500);
        $("#kagi").slideUp(500);
        $("#suside").slideUp(500);
        $("#reel2019").slideUp(500);
        $("#enma").slideDown(500);
        $("#egorock").slideUp(500);
        $("#NSNL").slideUp(500);
        $("#echo").slideUp(500);
        $("#kutyubunkai").slideUp(500);
        $("#hare5").slideUp(500);
    });
    $("#all").click(function () {
        $("#alpha").slideDown(500);
        $("#kagi").slideDown(500);
        $("#suside").slideDown(500);
        $("#reel2019").slideDown(500);
        $("#enma").slideDown(500);
        $("#egorock").slideDown(500);
        $("#NSNL").slideDown(500);
        $("#echo").slideDown(500);
        $("#kutyubunkai").slideDown(500);
        $("#hare5").slideDown(500);
    });
});