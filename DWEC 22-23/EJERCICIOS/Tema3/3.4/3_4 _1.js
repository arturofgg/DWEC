let ventana;

function abrirVentana(){
    if (confirm("Abre una ventana") == true) {
        ventana = window.open("https://github.com/" ,"move" ,"width=300px, height=200px");
        ventana.moveBy(500,500);
        ventana.moveTo(100,200);
    }
}

function randomVentana(){
    let caso = parseInt(Math.random()* 4);
    switch (caso) {
        case 0:
            ventana=window.open("https://www.habbo.es/" ,"habbo" ,"width=300px, height=200px");
            break;
        case 1:
            ventana=window.open("https://tetris.com/play-tetris/" ,"tetris" ,"width=300px, height=200px");
            break;
        case 2:
            ventana=window.open("https://www.hola.com/" ,"hola" ,"width=300px, height=200px");
            break;
        case 3:
            ventana=window.open("https://jcw87.github.io/c2-sans-fight/" ,"sans" ,"width=300px, height=200px");
        break;
    }
}
 
function hayCookies(){
    ventana=window.open("https://www.habbo.es/" ,"habbo" ,"width=300px, height=200px");
    if(navigator.cookieEnabled){
        alert("COcKIES");
    }
}