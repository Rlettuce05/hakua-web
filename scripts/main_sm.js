if (navigator.userAgent.match(/(iPhone|Android|iPad|iPod)/)) {
    $(() => {
        //topのmarginを設定する
        var width = $(window).width();

        $("#pagetop").css('margin-bottom', `${(width/16)*9-112}px`);
    });
}