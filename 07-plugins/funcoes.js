$(function () {
    //normalizeH("div div");
    //normalizeH("div .p");
    normalizeH(".normalize");
    $(window).resize(function () {
        normalizeH(".normalize");
    });

    function normalizeH(element) {
        var maxHeight = {};
        $.each($(element).parent(), function (i, e) {
            $(e).find(element).css("height", "auto");
            maxHeight = $(e).find(element).map(function (il, el) {
                return $(el).height();
            }).get();

            $(e).find(element).height(Math.max.apply(this, maxHeight));
            console.log(maxHeight);
        });
    }

    function normalizeH_back(element) {
        $(e).find(element).css("height", "auto");
        var maxHeight = $(element).map(function (i, e) {
            return $(e).height();
        }).get();

        $(element).height(Math.max.apply(this, maxHeight));
        console.log(maxHeight);
    }
});