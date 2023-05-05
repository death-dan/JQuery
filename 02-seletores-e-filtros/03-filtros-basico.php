<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtros Básicos</title>

    <style>
        p {
            margin: 0;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="list" style="margin: 10%;">
        <input type="text" name="01" placeholder="Sem foco">
        <input type="text" name="02" autofocus placeholder="Com foco">

        <h1>Minha lista zebrada: <span>1</span></h1>
        <p>P - 01</p>
        <p>P - 02</p>
        <p class="p">P - 03</p>
        <p>P - 04</p>
        <p>P - 05</p>

        <h2>Elementos GT: <span>1</span></h2>
        <p class="p">P - 06</p>
        <p>P - 07</p>
        <p>P - 08</p>
        <p>P - 09</p>
        <p>P - 10</p>
    </div>

    <script src="../js/jquery.js"></script>
    <script src="filtros-basicos.js"></script>
</body>
</html>