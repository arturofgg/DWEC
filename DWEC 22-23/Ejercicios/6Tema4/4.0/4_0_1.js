/*
1.- La empresa Dolty S.A., tiene tres delegaciones en tres provincias andaluzas
(Sevilla, Huelva, Cadiz). Cada una de ellas tiene un numero variado de
empleados, que no es inferior a 4 en ninguna de ellas. Realiza un programa que
cargue el sueldo de los empleados, junto a su nombre, de cada una de las delegaciones en una array
distinto. Para finalizar la carga de cada array se ingresa como dato el cero.
Una vez ingresados los sueldos, mostrar los siguientes datos:
    a) Informar del tamaño (numero de empleados) de cada una de las delegaciones.
    b) Determinar la media de los sueldos de cada una de las delegaciones.
    c) Ordenar de menor a mayor los sueldos de Huelva, De mayor a menor los de Sevilla y
         Cádiz. Indicando a que delegación pertenece cada lista ordenada
    d) Determinar  el sueldo menor y el mayor de las tres delegaciones.
*/

let Huelva = [];
let Sevilla = [];
let Cadiz = [];
let arrayTotal = [];

function elegirNumempleados(cadena){
    let numEmpleados
    do{
        numEmpleados =  parseInt(prompt("ESCRIBE EL NUMERO DE EMPLEADOS PARA "+ cadena));
    }while (numEmpleados<1);
    return numEmpleados;
}

function CrearArray(delegacion){
    let arrayN=[];
    let arrayS=[];
    let opcion = delegacion;
    numEmpleados = elegirNumempleados(opcion);
    for(let i=0; i<numEmpleados; i++){
        arrayN[i]=prompt("ESCRIBE EL NOMBRE DEL EMPLEADO");
        arrayS[i]= parseInt(prompt("ESCRIBE EL SUELDO DEL EMPLEADO"));
    }
    return {
        nombres:arrayN,
        sueldos:arrayS,
        numero:numEmpleados
    }
}

function mediaSueldos(arraySueldos){
    let total=0;
    let media=0;
    for(let i=0; i<arraySueldos.length; i++ ){
       total = total + parseInt(arraySueldos[i]); 
       console.log("Este es el total "+total);
    }
    console.log(total);
    media=parseInt((total/(arraySueldos.length)));
    return media;
}

Huelva = CrearArray("HUELVA");
Sevilla = CrearArray("SEVILLA")
Cadiz = CrearArray("CADIZ");

document.write("Cantidad de trabajadores en Huelva: " + Huelva.numero + "<br>");
document.write("Cantidad de trabajadores en Sevilla: " + Sevilla.numero + "<br>");
document.write("Cantidad de trabajadores en Cadiz: " + Cadiz.numero + "<br><br>");

document.write("La media de sueldos en Huelva es " + mediaSueldos(Huelva.sueldos) + "<br>");
document.write("La media de sueldos en Sevilla es " + mediaSueldos(Sevilla.sueldos) + "<br>");
document.write("La media de sueldos en Cadiz es " + mediaSueldos(Cadiz.sueldos) + "<br><br>");

document.write("El orden de los sueldos en Huelva de menor a mayor es " + Huelva.sueldos.sort() + "<br>");
document.write("El orden de los sueldos en Sevilla de menor a mayor es " + Sevilla.sueldos.sort() + "<br>");
document.write("El orden de los sueldos en Cadiz de menor a mayor es " + Cadiz.sueldos.sort()  + "<br><br>");

arrayTotal = (Huelva.sueldos.concat(Sevilla.sueldos, Cadiz.sueldos));
arrayTotal.sort();

document.write("El sueldo menor total es " + arrayTotal[0] + " y el sueldo mayor total es " + arrayTotal[arrayTotal.length-1]  + "<br>");