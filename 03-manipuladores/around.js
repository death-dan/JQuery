$(function () {
    //Wrap adiciona <div> em todos os <p>
    //$("p").wrap("<div>");

    //WrapAll envolve <div> em todos os <p>
    $("p").wrapAll("<div>");

    //WrapInner adiciona <span> dentro de todos os <p>
    $("p").wrapInner("<span>");

    //Unwrap retira o <p> q envolve o <span>
    $("span").unwrap("p");

    //Wrap adiciona <h2> em todos os <span>
    $("span").wrap("<h2>");
});