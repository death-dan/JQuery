$(function () {
    //Remove o elemento b do documento
    $(".b").remove();

    //Deixa o elemento d vazio
    $(".d").empty();

    setTimeout(function () {
        $(".d").text("#BoraProgramar");
    }, 2000);

    $("p").on("click", function () {
        $(this).toggleClass("active");
    });

    var p;

    $(".button").on("click", function () {
        if (p) {
            p.appendTo(".r");
            p = null;
        } else {
            p = $("p").detach();
        }
    });

    var href = $(".e").text();
    //Troca o elemento e por um link
    $(".e").replaceWith("<p><a target='_blank' href='https://" + href +"'>" + href +"</a></p>");

    //Troca o texto em todos elementos p
    $("<p>#BoraProgramar!!</p>").replaceAll("p");
});