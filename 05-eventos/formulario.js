$(function () {
    var instruction = $(".result b");

    $("input").focus(function () {
        console.log("FOCUS");
    }).focusin(function () {
        instruction.text("Informe o " + $(this).attr("placeholder").replace(":", ""));
    }).focusout(function () {
        if (!$(this).val()) {
            instruction.text("Hey, e o titulo ?");
        }
    }).change(function () {
        instruction.text($(this).val());
    });

    $("*").blur(function () {
        console.log("BLUR : " + this);
    }).focusout(function () {
        console.log("OUT : " + this);
    });

    $("*").select(function (e) {
        console.log(e);
    });

    $("input, textarea").focus(function () {
        $(this).select();
        //document.execCommand("copy");
    });

    $("form").on("submit", function (e) {
        e.preventDefault();

        var form = $(this);
        var data = $(this).serialize();

        console.log(data);

        form.find("button").text("Carregando!");
    });
});