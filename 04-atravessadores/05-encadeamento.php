<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encadeamento</title>

    <style>
        body {
            padding: 10%;
        }

        .article{
                padding: 20px;
                border: 1px solid #eee;
            }

            .article_header{
                margin-bottom: 20px;
                border-bottom: 1px solid #eee;
            }

            .article_link{
                display: inline-block;
                padding: 10px 20px;
                background: #006699;
                color: #fff;
                text-decoration: none;
            }

            .active{
                background: #bf7676;
            }

            .date{
                margin: 20px 0;
                font-size: 0.8em;
                color: #09d;
            }

            .load {
                display: inline-block;
                padding: 10px 20px;
                background: #eee;
                color: #888;
                cursor: pointer;
            }
    </style>
</head>
<body>
    <article class="article">
        <header class="article_header">
            <h1>Curso jQuery Essentials</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Libero esse quidem commodi repellat numquam similique maiores 
                expedita deserunt fugiat perspiciatis a nihil placeat, dolores 
                eligendi optio, aliquid veritatis explicabo iure.
            </p>
        </header>

        <div class="article_content">
            <p>Lorem Ipsum is simply dummy text of the <mark>printing and typesetting industry.</mark> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>It has survived not only five centuries, but also the leap <a href="#" title="Link">into electronic</a> typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing...</p>
            <p>Lorem Ipsum passages, <b>and more recently with desktop <a href="#" title="Link">into electronic</a> publishing software like Aldus PageMaker</b> including versions of Lorem Ipsum.</p>
        </div>
    </article>

    <script src="../js/jquery.js"></script>
    <script src="encadeamento.js"></script>
</body>
</html>