$(function () {
    var speed = 1000;

    $(".expand").on("click", function () {
        $(".slide_content").stop().slideDown(speed, function () {
            //Completar a ação
        });
    });

    $(".close").on("click", function () {
        $(".slide_content").stop().slideUp(speed, function () {
            //Completar a ação
        });
    });

    $(".toggle").on("click", function () {
        $(".slide_content").stop().slideToggle(speed, function () {
            //Completar a ação
        });
    });

    $(".slide h4").on("click", function () {
        $(".slide_content").stop().slideUp(speed);
        $(this).parent().find(".slide_content").slideToggle();
    });
});