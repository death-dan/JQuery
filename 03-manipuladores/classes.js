$(function () {
    $("p").css("color", "#006699");
    $("p").css({
        color: '#555'
    });

    //Troca o tipo de atributo do elemento
    $(".segunda").attr("id", "segundo");
    console.log($(".segunda").attr("id"));

    //Busca o tipo de propriedade do elemento input
    console.warn($("input").prop("checked"));
    //Busca o atributo do elemento input
    console.warn($("input").attr("checked"));

    //Altera o valor do elemento input
    $("input").val("nome");
    //Busca o valor do elemento input
    console.warn($("input").val());

    //Clona o elemento e adiciona no html e troca seu texto
    $(".segunda").clone().appendTo("body").html("<b>#BoraProgramar!!</b>");

    $("div").on("click", function () {
        //Adiciona e retira a class 
        //$(this).toggleClass("add");

        if ($(this).hasClass("add")) {
            $(this).removeClass("add");
            $(this).find("p").slideUp();
            $("input").removeAttr("checked");
        } else {
            $(this).addClass("add");
            $(this).find("p").slideDown();
            $("input").attr("checked", "checked");
        }
    });
});