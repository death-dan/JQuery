<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classes</title>

    <style>
        body {
            padding: 10%;
        }

        div {
            background-color: #eee;
            padding: 15px;
            border-bottom: 1px solid #ccc;
        }

        div p {
            font-size: 0.8em;
            margin: 10px 0 0 0;
        }

        .add {
            background-color: #000;
            color: #fff;
        }

    </style>
</head>
<body>

    <div>
        <span>Hey, estamos aprendendo <b>jQuery</b> aqui !</span>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Placeat, unde incidunt sunt delectus asperiores autem eius earum 
            cumque dignissimos perferend.
        </p>
    </div>
    <div class="segunda" id="id" data-action="este">
        <span>E com isso podemos criar interfaces incríveis</span>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Placeat, unde incidunt sunt delectus asperiores autem eius earum 
            cumque dignissimos perferend.
        </p>
    </div>
    <div class="add">
        <span>Então #BoraPrograma !!</span>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Placeat, unde incidunt sunt delectus asperiores autem eius earum 
            cumque dignissimos perferend.
        </p>
    </div>
    <div>
        <input type="checkbox" checked="checked" /> Input Checado!!
    </div>

    <script src="../js/jquery.js"></script>
    <script src="classes.js"></script>
</body>
</html>