<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet' type='text/css'>

    <style>
            *{
                font-family: 'Open Sans', serif;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body{
                padding: 10%;
            }

            form{
                margin-top: 30px;
            }

            input, textarea{
                display: block;
                width: 100%;
                padding: 10px;
                margin: 0 0 20px 0;
                border: 2px solid #ccc;
                border-radius: 5px;
                font-size: 1.2em;
            }

            button{
                padding: 10px 20px;
                border: none;
                color: #fff;
                font-size: 1.2em;
                font-weight: bold;
                background: #069;
                cursor: pointer;
                border-radius: 5px;
            }

            button:hover{
                background: #09f;
            }

            .submit{
                text-align: right;
            }

            .result{
                width: 100%;
                padding: 20px;
                background: #000;
                color: #fff;
                border-radius: 5px;
            }
        </style>
</head>
<body>
    <div class="result">Instruções: <b></b></div>

    <form action="#" method="post">
        <input type="text" name="title" placeholder="Titulo:">
        <textarea name="desc" placeholder="Descrição:" rows="3"></textarea>

        <div class="submit">
            <button>Enviar Agora!</button>
        </div>
    </form>

    <script src="../js/jquery.js"></script>
    <script src="formulario.js"></script>
</body>
</html>