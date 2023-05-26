//Cuando un usuario haga clic en una ciudad, genera el mensaje "Cargando informe meteorológico…”
function alerta(elemento){
    alert("Loading weather report..");
}


//OCULTAR cuadro de cookies
function ocultarcookies(element) {
       
    element.closest(".card-cookies").classList.add("ocultar");  //.remove("ocultar") es para remover una clase
}

//cuando el usuario cambia <select> convierte las temperaturas de Celsius a Fahrenheit 
function cambiartemperatura(element) {
    
    for(var i=1; i<=8; i++) {
        var temperatura = document.querySelector("#grados" + i);
        var valor = parseInt(temperatura.innerText);
        if(element.value == "C") {
            temperatura.innerText = Math.round(5 / 9 * (valor - 32));
        } else {
            temperatura.innerText = Math.round(9 / 5 * valor + 32);
        }
    }
}
  
 


   