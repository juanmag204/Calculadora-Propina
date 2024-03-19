let expReg = /@(\w+)/g; 
let texto = "";


function corValido() {
    var mensaje = document.getElementById("mensaje").value;
    let usuarios = mensaje.match(expReg);
    alert(usuarios);
}
