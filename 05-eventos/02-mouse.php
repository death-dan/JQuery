<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouse</title>

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet' type='text/css'>

    <style>
        *{
            font-family: 'Open Sans', serif;
        }
        
        body {
            padding: 10%;
        }

        div {
            background-color: #000;
            color: #fff;
            padding: 5px;
            margin-top: 10px;
            font-size: 0.8em;
        }

        div * {
            margin: 0;
        }

        .button {
            display: inline-block;
            padding: 10px 15px;
            background: #09f;
            color: #fff;
            font-weight: bold;
            text-shadow: 1px 1px 0 #000;
            cursor: pointer;
        }

        .button:hover {
            background: #069;
        }

        .menu {
            position: absolute;
            left: 0;
            width: 100%;
            top: 100%;
            background-color: #fff;
            color: #000;
            font-size: 0.8em;
            font-weight: 300;
            padding: 10px;
            border: 2px solid #ccc;
        }

        .over {
            padding: 30px;
            color: #fff;
        }

        .over a {
            color: #fff;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <p class="j_click button">Click</p>
    <p class="j_dbclick button">Dbclick</p>
    <p class="j_contextmenu button">Contextmenu</p>
    <p class="j_hover button">Hover</p>
    <p class="j_mousemove button">Mousemove</p>

    <div class="j_over over">
        <p>
            Este é um menu <a href="#">Com Link!</a>
        </p>
    </div>

    <script src="../js/jquery.js"></script>
    <script src="mouse.js"></script>
</body>
</html>