//4.- Pedir un número entre 0 y 9999 y decir si es capicúa.

var num;

function capicua(n){
    var capicua = n.toString().split("").reverse().join("");
    return Number(capicua);
    }

do{
    num=prompt("Escribe un numero entre 0 y 9999");
    if(num<9999){
        document.write("El numero introducido es correcto</br>")
    }else document.write("Escribe un numero entre 0 y 9999</br>")
}while(num>9999);

if(capicua(num)==num){
    document.write("El numero es capicua");
}else document.write("El numero no es capicua")