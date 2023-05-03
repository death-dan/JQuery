//FORMA PADRÃO DE INICIALIZAR O JQUERY
//$(document).ready(function () {
//    $("h1").html("Forma padrão de inicialização");
//});

//FORMA PADRÃO DE INICIALIZAR O JQUERY SIMOLIFICADO
//$(function () {
//    $("h1").html("Forma simplificado de inicialização");
//});

//CARREGANDO ANTES DE OUTRA LIB
//jQuey(function ($) {
//    $("h1").html("Inicializando antes de outra lib");
//});

//CARREGANDO DEPOPIS DE OUTRA LIB
//var $j = jQuery.noConflict();
//$j(document).ready(function () {
//    $j("h1").html("Inicializando depois de outra lib");
//});

$(function () {
    $("h1").html("Forma simplificado de inicialização");

    console.group("Mensagens gerais");
    console.log("");
    console.info("Info em mesagem");
    console.warn("Warnning em mensagem");
    console.error("Error em mensagem");
    console.groupEnd();

    var msg = true;
    console.group("Mensagens gerais");
    console.info("Cadastro iniciado");

    if (msg === true) {
        console.log("Cadastro Realizado");
    } else {
        console.warn("Erro ao Cadastrar");
    }

    console.groupEnd();
});