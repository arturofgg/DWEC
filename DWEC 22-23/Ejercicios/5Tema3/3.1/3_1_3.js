//Realiza una función que reciba como argumento un array con dos elementos de tipo cadena y 
//devuelva true su en el primer elemento de la matriz se encuentran todas las letras del segundo
//elemento de la matriz. Por ejemplo['javascript','JavaScript'] debe devolever true; 
//['java','JavaScript'], false; ['JavaScript','java'],true;

ArrStrings=["javascript","javascript"];

function letraB(varr){
    let arr=[]
    let arr2=[]
    let num=0;
    let bool;

    arr = varr[num].split("");
    num++;
    arr2 = varr[num].split("");

    for(let i=0;i<arr2.length && i<arr.lenght; i++){
        if (arr[i]==arr2[i]){
            bool==true;
        }else{
            bool==false;
            i=100;
        } 
    }
    return bool;
}
document.write(letraB(ArrStrings));