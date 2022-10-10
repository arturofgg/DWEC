//Pedir un número entre 0 y 9999 y mostrarlo con las cifras al revés.

var num;

function InvetirNum(n){
    var numInv = n.toString().split("").reverse().join("");
    return Number(numInv);
    }

do{
    num=prompt("Escribe un numero entre 0 y 9999");
    if(num<9999){
        document.write("El numero introducido es correcto</br>")
    }else document.write("Escribe un numero entre 0 y 9999</br>")
}while(num>9999);

document.write(InvetirNum(num));