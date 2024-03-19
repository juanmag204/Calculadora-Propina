function contarPalabras() {
    let texto = document.getElementById('texto').value;
    let palabras = texto.match(/\b\w+\b/g);
    let resultado = palabras ? palabras.length : 0;
    document.getElementById('resultado').innerText = "Número de palabras: " + resultado;
  }