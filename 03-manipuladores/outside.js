$(function () {
    var title = $("title").text();

    $(".j").before("<h1>" + title + "</h1>");
    $("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam libero similique suscipit</p>").insertBefore($(".j"));

    var old_text = "<p>Texto de comparação Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam libero similique suscipit, vitae ipsa ipsam incidunt cum distinctio molestias voluptates laboriosam dolorem cumque mollitia error omnis ad corporis illo.</p>";
    
    $(".j").after(old_text);
    $(".j").after("<a class='a' href='#'>Continue lendo ...</a>");
    $(".a").insertAfter("p:last");
});