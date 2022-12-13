//2.- Pedir un número entre 0 y 9999 y decir cuantas cifras tiene.

do{
    var num=prompt("Escribe un numero entre 0 y 9999");
    if(num<9999){
        document.write("El numero introducido es correcto</br>")
    }else document.write("Escribe un numero entre 0 y 9999</br>")
}while(num>9999);

document.write("El numero tiene ", num.length, " cifras")
