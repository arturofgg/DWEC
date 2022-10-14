//Hacer una pagina Web que permita imprimir una tabla de conversion de grados Fahrenheit a Celsius y viciversa.
//Se debe preguntar por el tipo de conversion(C o F) y el valor de partida y el valor final.
//El número de entradas en la tabla deberá ser siempre de 10 por lo que el intervalo se tendrá
//que ajustar en función de los valores introducidos. Se mostrara en el navehador pot medio de document.write.


var tipo;
var numC;
var numF;

function definirTemp(){
    do{
        if(tipo!="C" && tipo!="F"){
            var tipo=prompt("Que tipo es (C/F)");
        }
    }while (tipo!="C" && tipo!="F");
    return tipo;
}

function definirValorC(cantidad){
    var numFin=(cantidad*1.8)+32;
    return numFin;
}

function definirValorF(cantidad){
    var numFin=(cantidad-32)*(5/9);
    return numFin;
}

for($i=0;$i<10;$i++){
tipo=definirTemp();
    if(tipo=="C"){
        numC=parseFloat(prompt("Escribe los grados en Celsius"));
        numF=definirValorC(numC);
        document.write(numC," ",numF, "</bR>");
    }
    else if (tipo=="F"){
        numF=parseFloat(prompt("Escribe los grados en Farenheit"));
        numC=definirValorF(numF);
        document.write(numF," ",numC, "</bR>");
    }
 }
