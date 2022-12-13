//EJERCICIO: dias_finaño
//Crea un script que pida muestre el número de días que quedan desde hoy hasta el fin de año. 
//Recuerda que los meses empiezan desde el número 0.

let fecha = new Date();   
let finAño = new Date("12/31/2022");   
let diferencia = fecha.getTime() - finAño.getTime();   
let diferncia2 = diferencia / (1000 * 60 * 60 * 24);   
document.write(Math.round(diferncia2*(-1)) + " días hasta fin de año. </b>" );