/* 2.-  Crea un programa que pida al usuario su título, autor de película favoritay año de estreno, y muestre:
    a)    El tamaño del ambos (título y autor), sin contar espacios.
    b)    La cadena de caracteres en minúsculas y en mayúsculas.
    c)   Que divida los datos en tres líneas, donde ponga
        a.    Título:
        b.    Autor:
        c.     Año:
*/
let titulo = prompt("Escribe un titulo");
let autor = prompt("Escribe un autor");
let año;
let fecha = new Date();

do{
    año = parseInt(prompt("Escribe un el año de estreno"));
}while(año < 1700 || año > fecha.getFullYear());

document.write("Titulo: " + titulo.replaceAll(" ","").length +" caracteres "+titulo.toUpperCase()+" "+titulo.toLowerCase()+ "<br>");
document.write("Autor: " +autor.replaceAll(" ","").length+" caracteres "+autor.toUpperCase()+" "+autor.toLowerCase()+ "<br>");
document.write("Año: " +año);