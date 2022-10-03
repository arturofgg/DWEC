//1
var nb = prompt('Escriba su nombre');
var email = prompt('Escriba su email');
    document.write(nb, "<br>");
    document.write(email, "<br>");

//2
const pi = 3.14;
var area;
var radio = prompt('Escribe un radio');
area = pi*(radio*radio);
document.write('El area de radio ', radio, ' es ',area), "<br>";

//3
var edades = [prompt('Escribe una edad'), prompt('Escribe un edad'),prompt('Escribe un edad'),prompt('Escribe un edad') ];
edades.sort();
var suma;
suma=edades[0]+edades[3]+(edades[1]*edades[2]);
document.write("<br>", suma);

//4
var lado = prompt('Escribe el lado de un cuadrado'),
perimetro = lado*4;
 document.write("<br> El perimetro del cuadrado es ", perimetro);

 //5
 var precio = prompt('Escribe el precio del articulo (sin decimales)'),
 cantidad = prompt('Escribe la cantidad de articulos'),
 total = precio*cantidad;
 document.write("<br> El total a pagar es ", total);
