//Escribe una función que reciba dos números con dos decimales, que son la base y altura de un rectángulo, de
//forma que devuelva su perímetro. Puedes elegir que la función obtenga los datos de la entrada estándar o no.
//Indicándolo en el script.

let base=[];
let altura=[];
let perimetro=[];

function perimetroRectangulo(vbase,valtura){
    var vperimetro = (vbase*2)+(valtura*2);
    return vperimetro;
}

for(let i=0;i<2;i++){
    base[i]=prompt("Escribe la base de un rectángulo");
    altura[i]=prompt("Escribe la altura");
    perimetro[i]=perimetroRectangulo(base[i], altura[i]);
}

function crearTabla(base, altura, perimetro){
    var stringf="<tr><th>Entrada</th><th>Salida</th></tr>";
    for(let i=0;i<2;i++){
        var fila="<tr><td>";
        fila+=base[i];
        fila+=",";
        fila+=altura[i];
        fila+="</td><td>";
        fila+=perimetro[i];
        fila+="</td></tr>";

        stringf+=fila;
    }
    return stringf;
}

document.getElementById("tabla").innerHTML=crearTabla(base, altura, perimetro);
