$(function () {
    //Adiciona css em todos os elementos menos com class p
    $("p:not(.p)").css("font-weight", "bold");

    //Adiciona css no primeiro elemento
    $("p:first").css("color", "red");
    //Adiciona css no ultimo elemento
    $("p:last").css("color", "red");

    //Adiciona css nos elementos pares
    $("p:even").css("background", "#eee");
    //Adiciona css nos elementos impares
    $("p:odd").css("background", "#ccc");

    //Adiciona texto na posição do indice escolhido
    $("p:eq(4)").text("Posição escolhida");
    //Adiciona texto acima do incide escolhido
    $("p:gt(4)").text("Seletores GT");
    //Adiciona texto acima do elemento escolhido
    $("p:lt(4)").text("Seletores LT");

    //Adiciona css no header da lista
    $(".list :header").css({
        "font-size" : "1.4em",
        color : "#888"
    });
    //Adiciona css no elemento dentro de header
    $(".list :header span").css("color", "blue");

    //Animando elemento
    function animar_el(elemento) {
        $(elemento).fadeToggle(400, function () {
            animar_el(elemento);
        });
    }

    var num = 1;
    setInterval(function () {
        $(":animated").text(num);
        num ++;
    }, 800); 

    animar_el(".list span");

    //Todos os elementos com focus
    $(":focus").css("background", "green");

    //Pegar elementos com root
    console.log($(":root"));
});