$(function () {
    var text = $(".j").text();
    var html = $(".j").html();

    var append = "<p><b>#VamosProgramar</b></p>";

    //Adiciona o texto
    // $(".e").text(text);
    // $(".e").text(html);
    //Adiciona o html
    // $(".e").html(text);
    // $(".e").html(html);

    //Adiciona elementos no fim do elemento pai
    $(".e").append("<p>" + text + "</p>");
    $(".e").append("<p>" + html + "</p>");
    $(".a").appendTo(".e");
    $(append).appendTo(".e");


    //Adiciona elementos acima do elemento pai
    $(".e").prepend("<h2>Resultados:</h2>");
    $("<p>Exemplos:</p>").prependTo(".e p:first");
});