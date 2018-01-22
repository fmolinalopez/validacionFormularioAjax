<?php
$apellido = $_REQUEST['apellido'];
$nombre = $_REQUEST['nombre'];
$edad = $_REQUEST['edad'];

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Datos</title>
</head>
<body>
<h1>Nombre: <?=$nombre?></h1>
<h1>Apellidos: <?=$apellido?></h1>
<h1>Edad: <?=$edad?></h1>
</body>
</html>
