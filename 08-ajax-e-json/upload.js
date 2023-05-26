$(function () {
    $("form").submit(function (e) {
        e.preventDefault();

        var form = $(this);
        var form_data = form.serialize();
        // $.post("upload.php", function (response) {
        //     console.log(response);
        // });

        form.ajaxSubmit({
            url: "upload.php",
            beforeSubmit: function () {
                $(".success, .load").fadeOut(function () {
                    $(this).remove();
                });
            },
            uploadProgress: function (event, position, total, percent) {
                if (form.find(".load").length) {
                    form.find(".load").width(percent + "%").css("background", "#eee");
                    form.find(".load b").text(percent + "%");
                } else {
                    form.find("button").after("<span class='load'><b>" + percent + "%</b></span>");
                }
            }, 
            success: function () {
                form.find(".load").fadeOut(function () {
                    $(this).remove();
                });
                form.trigger("reset");
            }
        });
    });
});