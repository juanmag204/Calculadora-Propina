let expReg = /^[a-zA-Z0-9.%+-_]+@[a-zA-Z]+\.[a-zA-Z]+$/
function corValido() {
    var correo = document.getElementById("Correo").value;
    if ((expReg).test(correo)) {
        alert("Correo valido ");
    } else {
        alert("Correo invalido, por favor revisalo");
    }
}
