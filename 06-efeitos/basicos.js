$(function () {
    var btn = $(".button");
    var timeEffet = 5000;

    btn.on("click", function () {
        $(".hide").stop().hide(timeEffet);

        $(".show").stop().show(timeEffet, function () {
            console.log("OK!");
        });

        $(".toggle").stop().toggle(timeEffet);
    });

});