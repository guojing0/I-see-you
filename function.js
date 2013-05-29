$(document).ready(function() {
    $(window).resize();
    $("#display").fadeIn(4000);
    $("#item0").delay(800).fadeIn(4000);
    $("#item1").delay(1300).fadeIn(4000);
    $("#item2").delay(1800).fadeIn(4000);
    $("#item3").delay(2300).fadeIn(4000);
    $("#item4").delay(2800).fadeIn(4000);
    $("#item5").delay(3300).fadeIn(4000);
    $("#item6").delay(3800).fadeIn(4000);
    updateTime();
});

function updateTime() {
    var start_time = 1342096200;
    var duration = parseInt(Date.now() / 1000 - start_time);

    var seconds = duration % 60;
    if (seconds < 10)
        seconds = "0" + seconds;
    duration = parseInt(duration / 60);
    var minutes = duration % 60;
    if (minutes < 10)
        minutes = "0" + minutes;
    duration = parseInt(duration / 60);
    var hours = duration % 24;
    if (hours < 10)
        hours = "0" + hours;
    duration = parseInt(duration / 24);
    var days = duration;
    $('.days-number').text("" + days);
    $('.seconds').text(hours + " hours " + minutes + " minutes " + seconds + " seconds");
    setTimeout("updateTime()", 1000);

}

/* The code is from lovett.cc, and I made some little changes. The author is zellux whose blog is http://blog.yxwang.me/ */
