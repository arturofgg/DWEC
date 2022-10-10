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

function definirValorC(){
        var numIni=prompt("Escribe los grados en Celsius");
        var numFin=(numIni*1.8)+32;
        var arrayC = [numIni, numFin];
        return arrayC;
}

function definirValorF(numIni,numFin){
    var numIni=prompt("Escribe los grados en Farenheit");
    var numFin=(numIni-32)*(5/9);
    var retornoF

    retornoF.numIni = numIni;
    retornoF.numFin = numFin;
    return retornoF;
}

tipo=definirTemp();
document.write(tipo,"<br>")

 if(tipo=="C"){
        numF=definirValorC();
        document.write("Temperatura en Celsius: ",numF[0],"<br>Temperatura en Celsius", numF[1]);
    }

else if (tipo=="F"){
        for(var i=0; i<numC.lenght; i++){
            numC=definirValorF();
            numC.numIni
            document.write("Temperatura en Farenheit: ",numC[i].numIni,"<br>Temperatura en Celsius", numC[i].numFin);
        }
    }

