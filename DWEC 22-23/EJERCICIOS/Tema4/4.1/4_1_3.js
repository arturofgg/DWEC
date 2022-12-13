let a1=["javascript", "java"];
let a2=["java","javascript"];

function comparador(arr) {
    p1=arr[0];
    p2=arr[1];
    acomulador=0;

    for (let i = 0; i < p2.length; i++) {
        if(p1.includes(p2.substring(i,i+1))){
            acomulador++;
        }
    }
    if (acomulador==p1.length){
        return document.write("Todas la letras encontradas <br>");
    }else return document.write("Letras no encontradas <br>");

}
comparador(a1);
comparador(a2);