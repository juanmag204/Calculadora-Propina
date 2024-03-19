let expReg = /^3[0-9]{9}$/; 

function telValido() {
    var tel = document.getElementById("telefono").value;
    if ((expReg).test(tel)) {
        alert("Número de teléfono válido en Colombia.");
    } else {
        alert("Número de teléfono no válido en Colombia.");
    }
}
