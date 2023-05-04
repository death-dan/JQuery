$(function () {
    //muda a cor de todos elemento P filhos de article
    $("article p").css("color", "red");

    //muda a cor de todos elementos filho direto de article
    $("article > *").css("color", "blue");

    //adiciona cor de fundo em todos elementos proximos a DIV
    $("div + *").css("background", "yellow");

    //seleciona os irmão P de DIV
    $("div ~ p").text("Irmão");
});