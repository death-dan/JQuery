<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teclado</title>

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet' type='text/css'>

    <style>
        *{
            font-family: 'Open Sans', serif;
        }
        
        body {
            padding: 10%;
        }

        input, textarea {
            display: block;
            width: 100%;
            padding: 20px;
            margin: 0 0 20px 0;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 1.2em;
        }

    </style>
</head>
<body>
    <input type="text" name="titulo">
    <textarea name="desc" rows="3"></textarea>

    <div class="result"></div>

    <script src="../js/jquery.js"></script>
    <script src="teclado.js"></script>
</body>
</html>