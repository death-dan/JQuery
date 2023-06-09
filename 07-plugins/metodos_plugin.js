(function () {
    $.fn.metodo_plugin = function (options) {
        $("head").append('<link href="metodos.css" rel="stylesheet">');

        //CONFIGURAÇÔES
        var defaults = {
            title: this.attr("data-title") || "Titulo Aqui!",
            desc: this.attr("data-desc") || "Descrição Aqui!",
            button: this.attr("data-button") || "Fechar",
            e_speed: 400
        };

        //APLICAÇÂO
        $.extend(defaults, options);

        //METODOS
        var metodo_plugin = {
            open: function () {
                metodo_plugin.close();
                $("body").prepend("<div class='j_method_plugin'><div class='j_method_plugin_content'></div></div>");
                $(".j_method_plugin_content").html("<h1>" + defaults.title + "</h1>");
                $(".j_method_plugin_content").append("<p>" + defaults.desc + "</p>");
                $(".j_method_plugin_content").append("<button class='j_method_plugin_close'>" + defaults.button + "</button>");
                $(".j_method_plugin").fadeIn(defaults.e_speed).css("display", "flex");
            },
            close: function () {
                $(".j_method_plugin").stop().fadeOut(defaults.e_speed, function () {
                    $(this).remove();
                });
            }
        };

        //EXECUÇÂO DO METODOS
        this.stop().click(function (e) {
            e.preventDefault();
            metodo_plugin.open();
        });

        this.parent().on("click", ".j_method_plugin_close", function (e) {
            e.preventDefault();
            metodo_plugin.close();
        });

        return this;
    };
}(jQuery));