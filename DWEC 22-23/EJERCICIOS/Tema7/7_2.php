<?php

    $mbd = new PDO('mysql:host=localhost;dbname=javaScript72', "arturo", "arturo12345");
    $stmt = $mbd->prepare("SELECT usuarios FROM Usuarios");
    $stmt->execute();
    $datos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if(isset($_POST['enviar'])) {
            $usuario = $_POST['nombre'];
    }
   
    for($i=0; $i<count($datos); $i++){
        if($usuario==$datos[$i]){
            echo "usuario encontrado<br>";
        }else echo "usuario no encontrado<br>";
    }

/*
    if (in_array($usuario, $datos)) {
        echo "Usuario encontrado";
    }else echo "Usuario no encontrado";
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Comprobar disponibilidad del login</h1>
    <form method="POST">
        Nombre de usuario:
        <input type="text" name="nombre">
        <input type="submit" name="enviar" value="Comprobar disponibilidad">
    </form>
</body>
</html>