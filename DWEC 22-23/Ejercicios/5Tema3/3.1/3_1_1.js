// 1.- Crea un programa que muestre la hora actual, en diferentes formatos, según el valor que teclee el usuario por parámetro. Ejemplo:
/*a) 14:35:07 (hora detallada con
minutos y segundos)
b) 02:35 PM o AM
*/

let fecha = new Date();
let pregunta;

do{
pregunta = prompt("Elige formato a/b");

    if (pregunta=="a"){
        document.write(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());

    }else if (pregunta=="b"){
        if(fecha.getHours()>11){
            document.write(fecha.getHours() + ":" + fecha.getMinutes() + " PM");
        }else document.write(fecha.getHours() + ":" + fecha.getMinutes() + " AM");
    }
}while(pregunta!="a" && pregunta!="b")

