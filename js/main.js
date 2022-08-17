var texto = document.getElementById("txtEncryptDecrypt");
var rectangle1 = document.querySelector("#rectangle1");
var rectangle2 = document.querySelector("#rectangle2");
var txtEncrypt = document.querySelector("#txtEncryptDecrypt");
var btnEncrypt = document.querySelector(".btnEncrypt");
var btnDecrypt = document.querySelector(".btnDecrypt");
var btnCopy = document.querySelector(".btnCopy");

//funcion ocultar rectangulo 1 y mostrar el rectangulo 2
function rectangulo() {
    rectangle1.style.display = "none";
    rectangle2.style.display = "inline";
}

//funcion encriptar
function encriptarTexto() {
    let textoIn = texto.value.toString().toLowerCase();
    let nuevoTexto = textoIn
        .replace(/e/igm, 'enter')
        .replace(/i/igm, 'imes')
        .replace(/a/igm, 'ai')
        .replace(/o/igm, 'ober')
        .replace(/u/igm, 'ufat');
    document.getElementById("areaEncrypt").innerHTML = nuevoTexto;
}

//funcion desencriptar
function desencriptarTexto() {
    let textoIn = texto.value;
    let nuevoTexto = textoIn
        .replace(/enter/igm, 'e')
        .replace(/imes/igm, 'i')
        .replace(/ai/igm, 'a')
        .replace(/ober/igm, 'o')
        .replace(/ufat/igm, 'u');
    document.getElementById("areaEncrypt").innerHTML = nuevoTexto;
}

//Funcion Copiar
function copy() {
    var content = document.getElementById('areaEncrypt');
    content.select();
    document.execCommand('copy');
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