//Crear un script en el que se pregunte por el número de alumnos (no superior a 20, ni inferior a 8) que hay en un
//curso, y en función de este dato, pida el nombre de los alumnos y su nota de curso. Al final, se debe mostrar, cada
//alumno con su nota y después la media de todos los alumnos.

var nbAl=[];
var ntAl=[];
var suma=0;
var media=0;

do{
    numAl=prompt("Escribe un numero de alumnos");
    if(numAl<=20 && numAl>=8){
        for(let i=0;i<numAl;i++){
            nbAl[i]=prompt("Escribe el nombre del alumno nº",i);
            do{
                ntAl[i]=parseFloat(prompt("Escribe la nota del alumno nº",i));
            }while(ntAl[i]<0 || ntAl[i]>10);
        }
    }//else document.write("Escribe un numero de alumnos inferior a 20 y superior a 8<br>");
}while(numAl>20 || numAl<8);

for(let i=0;i<numAl;i++){
    document.write("Nombre: ", nbAl[i], "                  Nota: ", ntAl[i],"<br>");
    suma=suma+ntAl[i];
}

media=suma/numAl;
document.write("La media de la clase es " ,media);