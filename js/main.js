var texto = document.getElementById("txtEncryptDecrypt");
var textoIn = texto.value.toLowerCase();
var rectangle1 = document.querySelector("#rectangle1");
var rectangle2 = document.querySelector("#rectangle2");
var txtEncrypt = document.querySelector("#txtEncryptDecrypt");
var btnEncrypt= document.querySelector(".btnEncrypt");
var btnDecrypt= document.querySelector(".btnDecrypt");
var btnCopy= document.querySelector(".btnCopy");

//funcion ocultar rectangulo 1 y mostrar el rectangulo 2
function rectangulo() {
    rectangle1.style.display = "none";
    rectangle2.style.display = "inline";
}

//funcion encriptar
function encriptarTexto() {
    var nuevoTexto = textoIn.replace(/e/igm, 'enter');
    var nuevoTexto = nuevoTexto.replace(/i/igm, 'imes');
    var nuevoTexto = nuevoTexto.replace(/a/igm, 'ai');
    var nuevoTexto = nuevoTexto.replace(/o/igm, 'ober');
    var nuevoTexto = nuevoTexto.replace(/u/igm, 'ufat');
    document.getElementById("areaEncrypt").innerHTML = nuevoTexto;
}

//funcion desencriptar
function desencriptarTexto() {
    var nuevoTexto = textoIn.replace(/enter/igm, 'e');
    var nuevoTexto = nuevoTexto.replace(/imes/igm, 'i');
    var nuevoTexto = nuevoTexto.replace(/ai/igm, 'a');
    var nuevoTexto = nuevoTexto.replace(/ober/igm, 'o');
    var nuevoTexto = nuevoTexto.replace(/ufat/igm, 'u');
    document.getElementById("areaEncrypt").innerHTML = nuevoTexto;
}

//Funcion Copiar
function copy() {
    let copyText = document.querySelector("#areaEncrypt");
    copyText.select();
document.getElementById("txtEncryptDecrypt").value = "";
  }


//Botones
btnEncrypt.addEventListener('click', function () {
    rectangulo();
    encriptarTexto();
 });

 btnDecrypt.addEventListener('click', function () {
    rectangulo();
    desencriptarTexto();
 });

 btnCopy.addEventListener('click', function () {
      copy();
 });
