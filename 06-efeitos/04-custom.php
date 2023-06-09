<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Efeitos Custom</title>

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet' type='text/css'>

    <style>
        *{
            font-family: 'Open Sans', serif;
        }

        body{
            position: relative;
            display: flex;
        }

        .buttons{
            display: block;
            margin: 30% auto;
        }

        .animate{
            position: absolute;
            left: 0;
            top: 0;
            width: 50px;
            height: 50px;
            background: #09f;
        }
    </style>
</head>
<body>
    <div class="animate"></div>

    <div class="buttons">
        <button class="start">Start</button>
        <button class="stop">Stop</button>
        <button class="clear">Clear</button>
        <button class="finish">Finish</button>
    </div>

    <script src="../js/jquery.js"></script>
    <script src="custom.js"></script>
</body>
</html>