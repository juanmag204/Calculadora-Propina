function saludar(){
    var nombre = document.getElementById("nombre").value;
    console.log("Hola "+ nombre);
    alert("Hola " + nombre)
}

function cambiarcontenido(){
    document.getElementById('mensaje').innerHTML = "TEXTO NUEVOOOO"

}

function cambiarvalor(){
    document.getElementById('nombre').value = "Pepito Perez"

}

function mostrarmensaje(){
    alert("Hola mundo");
}