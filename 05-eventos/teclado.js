$(function () {
    var input = $("input");
    var textarea = $("textarea");

    input.keypress(function (e) {
        console.log("PRESS : " + e.which);
    }).keydown(function (e) {

        console.log("DOWN : " + e.which);
        console.log(e.metaKey);

        if (e.metaKey) {
            
            if (e.which === 85) {
                alert("Este é ctrl + u");
            }

            if (e.which === 74) {
                alert("Este é ctrl + j");
            }
        }
    }).keyup(function (e) {
        console.log("UP");
    });

    input.on("keyup", function () {
        var input = $(this);

        if (!$(".result").find("h1").length) {
            $(".result").prepend("<h1>" + input.val().toUpperCase() + "</h1>");
        } else {
            $(".result h1").text(input.val().toUpperCase());
        }
    });

    textarea.on("keyup", function () {
        var textarea = $(this);

        if (!$(".result").find("div").length) {
            $(".result").append("<div><p>" + textarea.val() + "</p></div>");
        } else {
            $(".result div").html(textarea.val().replace(/\n/g, "</p><p>") + "</p>");
        }
    });

    $(window).resize(function (e) {
        console.log($(this).outerWidth(), e);
    });

    $("body").height(1000);

    $(window).scroll(function (e) {
        console.log($(this).scrollTop());
        console.log(e);
    });
});