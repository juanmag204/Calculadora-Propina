function mostrar(n) {
    if (n == 1) {
        document.getElementById("imagen").scr = "../../img/Goku.jpeg"
    }else{
        document.getElementById("imagen").src = "../../img/Yo.jpeg";
    }
}
function bordear(n) {
    if (n == 1) {   
        document.getElementById("imagen").className = "estilo1";
    }else{
        document.getElementById("imagen").className = "estilo2";
    }
}

function validarEdad() {
    var edad = document.getElementById("edad").value;
    if (edad < 18 && edad > 120) {
        alert("Eres menor de edad");
    }else if(edad > 1 && edad < 18 ){
        alert("Eres mayor de edad");
    } else{
        alert("Verifica tu edad por favor");
    }
}
alert(resultado);

