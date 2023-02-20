<?php
    require('bases_datos.php');
    header('Content-Type: application/JSON');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials : true');
    $respuesta = new \stdClass();

    if (!empty($_POST)) {
        try {
            $a = AccesoDatos::getSingletone();

            if ($validos) {

                $a->findById(1);

                $mensaje = "registrado correctamente.";
            } else $mensaje = "datos erroneos.";

            $respuesta->validos = $validos;
            $respuesta->mensaje = $mensaje;

            print_r(
                json_encode(
                    $respuesta
                )
            );
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }
    ?>
