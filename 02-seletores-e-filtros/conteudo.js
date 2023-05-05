$(function () {
    //Adiciona css nos elementos q tenham conteúdo
    $("p:parent").css("background", "red");

    //Adiciona conteúdo em elementos q estejam vazios
    $("p:empty").html("<b>Este elemento está vazio!</b>");

    //Procura elementos com uma ocorrência especifica
    $("p:contains('Essentials')").css("color", "#fff");

    //Busca o elemento q contenha filho com ocorrência especifica
    $("p:has('b')").text("É este aqui");
});