let ventana;
let intervalo;

function abrir(){
    ventana = window.open("https://www.w3schools.com","ventana","width=300px, height=300px");
    intervalo=setTimeout(()=>{
        if(!ventana.closed){ ventana.close()}
    },10000);
}

function cerrar(){
    if(ventana!= null){
        ventana.close();
        clearTimeout(intervalo);
    }
}