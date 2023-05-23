$(function () {
    $(".j_click").click(function (event) {
        $(this).off("click");
        console.log(event);
        $("<div></div>").appendTo("body").html("<div>Event: <b>" + event.type +"</b></div>");
    }).mousedown(function (event) {
        console.log(event.type);
    }).mouseup(function (event) {
        console.log(event.type);
    });

    $(".j_dbclick").dblclick(function (event) {
        event.preventDefault();
        $(this).off("dbclick");
        console.log("event");
        $("<div></div>").appendTo("body").html("<div>Event: <b>" + event.type +"</b></div>");
    });

    $(".j_contextmenu").contextmenu(function (event) {
        event.preventDefault();
        console.log(event);
        $(this).css("position", "relative").append("<span class='menu'>Menu Desabilitado</span>");
        $(this).find("span").slideDown();

        $(this).mouseleave(function (event) {
            console.log(event);
            $(this).off("mouseleave").find("span").slideUp();
        });
    });

    $(".j_hover").hover(function (event) {
        console.log(event);
        if (!$(".hover").length) {
            $("<div class='hover'></div>").appendTo("body").html("<div>Event: " + event.type + "</div>");
        } else {
            $(".hover div").append(" | Event : " + event.type);
        }
    }).mouseenter(function () {
        $(this).text("Click Here!!!");
    }).mouseleave(function () {
        $(this).text("Click There!!!");
    }).click(function () {
        $(this).text("I m happy").off("hover mouseenter mouseleave");
    });

    $(".j_mousemove").mousemove(function (event) {
        event.preventDefault();
        if (!$(this).hasClass("stop")) {
            $(this).offset({top: event.pageY - $(this).outerHeight() / 2, left: event.pageX - $(this).outerWidth() / 2});
        } 
    }).click(function () {
        $(this).toggleClass("stop");
    });

    $(".j_over").mouseover(function (event) {
        console.log("-");
        console.log("Entrou em : " + event.target);
    }).mouseout(function (event) {
        console.log("-");
        console.log("Saiu de : " + event.target);
    });
});