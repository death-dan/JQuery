<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percurso [Parente]</title>

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
            <p class="a"><b>CURSO ONLIE:</b> 100% EM VIDEOS AULAS COM SUPORTE E CERTIFICADO</p>
            <p><b>13 VIDEO AULAS:</b> DISTRIBUÍDAS  EM 6 MODULOS COM MAIS DE 2H AULAS</p>
            <p class="a"><b>+ DE 300 ALUNOS:</b> ESTÃO ESTUDANDO E APRENDENDO NESSE CURSO</p>
        </div>
        <a href="#" title="Saiba Mais" data-link="true" class="article_link">Saiba Mais...</a>
    </article>

    <script src="../js/jquery.js"></script>
    <script src="parente.js"></script>
</body>
</html>