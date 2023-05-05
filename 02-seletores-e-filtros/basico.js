$(function () {
    $("b").text("Novo texto");

    $(".class").css("color", "red");

    $("#id").text("ID = Id");

    $("div *").css("border", "1px solid #ccc");

    $(".class, b").css({
        background : "blue",
        color : "red",
        'border-radius' : "5px",
        padding : "10px",
        'font-size' : "1.6em"
    });

    $("b").add("p").css("font-size", "2em");
});