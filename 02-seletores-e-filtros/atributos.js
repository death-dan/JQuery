$(function () {
    //Procura todos os elementos com class e adiciona css
    $("[class]").css("background", "#ccc");

    //Procura todo elemento q tenha data-name como atributo e adiciona css
    $("[data-name = 'true']").css("background", "#006699");

    //Procura todo elemento q tenha title como atributo
    //$("[tite']").css("background", "red");

    //Procura todo elemento q tenha title com atributo especifico
    //$("[title ='Qual']").css("background", "red");

    //Procura todo elemento q tenha title com atributo diferente
    //$("[title!='Qual']").css("background", "red");

    //Procura elemento especifico q tenha title com atributo diferente
    $("a[title!='Qual']").css("background", "red");

    //Procura todo elemento com atributo class que começa com ocorrencia especifica
    $("[class^='jquery']").css("background", "#0099ff");

    //Procura todo elemento com atributo class que termina com ocorrencia especifica
    $("[class$='div']").css("color", "#fff");

    //Procura todos elementos com atributo class que termina com ocorrencia especifica
    $("[class*='r']").css("font-weight", "bold");

    //Procura todos elementos com atributo class com ocorrencia especifica
    $("[class~='jquery']").css("text-transform", "uppercase");

    //Procura todos elementos com atributo class com ocorrencia especifica
    $("[class='jquery-essentials']").css("border-bottom", "3px solid red");  

    //Procura todos elementos com atributo class com ocorrencia especifica filha
    $("[class|='jquery-essentials']").css("border-bottom", "3px solid red"); 
    
    //Procura todos elementos com atributo class com ocorrencia especifica com mais ocorrenica
    $("[class*='jquery'][data-name]").css("color", "pink");  
});