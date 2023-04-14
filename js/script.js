const textoIngresado = document.querySelector("#texto");
const textoResultado = document.querySelector("#textoResultado");

const btnEncriptar = document.querySelector("#encri");
const btnDesencriptar = document.querySelector("#desencri");
const btnCopiar = document.querySelector("#copiar");

function encriptar() {
  let texto = textoIngresado.value;
  let Mayusculas = /[A-Z]/;
  let Acentos = /[áéíóúÁÉÍÓÚ]/;

  if (Mayusculas.test(texto) || Acentos.test(texto)) {
    alert("Error: Ha ingresado mayúsculas y/o acentos. Intente de nuevo.");
    textoIngresado.focus();
  } else {
    let textoEncriptado = texto
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("o", "ober")
      .replaceAll("a", "ai")
      .replaceAll("u", "ufat");

    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";

    textoResultado.value = textoEncriptado;
  }
}

function desencriptar() {
  let textoEncriptado = textoIngresado.value;
  let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = texto;

  document.getElementById("texto").value = '';

}

function copiar() {
  let textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
  textoIngresado.value = "";
  textoResultado.value = "";
  textoIngresado.focus();
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;



