$(function () {
    $(".class").click(function (e) {
        var msg = $(this);
        //console.log(e);
        //console.log(this);
        //console.log($(this));
        //console.log(msg);

        setTimeout(function () {
            msg.fadeOut(3000);
        }, 5000);

    }).text("OK").css("color", "green");
});