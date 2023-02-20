<?php
require('bases_datos.php');
//header('Content-Type: application/JSON'); 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials : true');
$respuesta2 = new \stdClass();
    
if (!empty($_POST)) {
    try {
        $a = AccesoDatos::getSingletone();

        $validos = true;
        $mensaje = "";

        $bdni = $_POST["bdni"];

        if (isset($_POST["bdni"])) {
           $a->eliminarUser($_POST["bdni"]);
        }else {
          $validos = false;
        }

        if ($validos) {
            $mensaje = "borrado correctamente.";
        } else {
            $mensaje = "datos erroneos.";
        }

        $respuesta2->validos = $validos;
        $respuesta2->mensaje = $mensaje;

        echo json_encode($respuesta2);
        
    } catch (PDOException $e) {
        echo json_encode($e->getMessage());
        die();
    }
}
?>