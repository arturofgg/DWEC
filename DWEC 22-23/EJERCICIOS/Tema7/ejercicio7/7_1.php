 <?php
    require('bases_datos.php');
    header('Content-Type: application/JSON');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials : true');
    $respuesta = new \stdClass();

    if (!empty($_POST)) {
        try {
            $a = AccesoDatos::getSingletone();

            $nombre = $_POST["nombre"];
            $apellido = $_POST["apellido"];
            $dni = $_POST["dni"];
            $estudios = $_POST["estudios"];

            $validos = true;

            if (empty($nombre)) {
                $validos = false;
            }

            if (empty($apellido)) {
                $validos = false;
            }

            if (empty($dni)) {
                $validos = false;
            }

            if (empty($estudios)) {
                $validos = false;
            }

            if ($validos) {

                $a->insertDatos(
                    array(
                        'dni' => $dni,
                        'nombre' => $nombre,
                        'apellido' => $apellido,
                        'estudios' => $estudios
                    )
                );

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
