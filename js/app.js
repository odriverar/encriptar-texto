let encrypMap = {};
let decrypMap = {};

async function CargarMapas(){
    const response = await fetch("JSON/maps.json");
    const maps =await response.json();
    encrypMap = maps.encriptaMapa;
    decrypMap = maps.desencriptaMapa;
}

/**
 * Encripta un texto utilizando un mapa de sustitución
 * @param {string} txtInput 
 * @returns {string} Texto encriptado 
 */
function encrypt(txtInput) {
    let encryptedText = '';
    for (let char of txtInput) {
        if (encrypMap[char]) {
            encryptedText += encrypMap[char];
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}

/**
 * Desencripta un texto utilizando un mapa de sustitución
 * @param {string} encryptedText 
 * @returns {string} Texto desencriptado
 */
function decrypt(encryptedText) {
    let decryptedText = '';
    let i = 0;

    while (i < encryptedText.length) {
        let found = false;
        for (let key in decrypMap) {
            if (encryptedText.startsWith(key, i)) {
                decryptedText += decrypMap[key];
                i += key.length;
                found = true;
                break;
            }
        }
        if (!found) {
            decryptedText += encryptedText[i];
            i++;
        }
    }
    return decryptedText;
}

function validarTexto(txtInput){
    const regex = /^[a-z\s]*$/;
    return regex.test(txtInput);
}

function encriptaTexto(){
    const inputText = document.getElementById("texto-entrada").value;
    if (!validarTexto(inputText) || inputText.length === 0) {
        mostrarOcultarElementos(true);
        let mensaje = inputText.length === 0 ? "Por favor, ingrese el texto a encriptar." : "Por favor, ingrese solo letras minúsculas y sin acentos.";

        Swal.fire({
            title: 'Error!',
            text: mensaje,
            icon: 'error'
          });
        return;
    }
    mostrarOcultarElementos(false);
    const encriptaTexto = encrypt(inputText);
    document.getElementById("texto-salida").value = encriptaTexto;

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Se encripto el texto correctamente."
      });
}

function desencriptaTexto(){
    const inputText = document.getElementById("texto-entrada").value;
    if (inputText.length === 0) {
        mostrarOcultarElementos(true);
        let mensaje = inputText.length === 0 ? "Por favor, ingrese el texto a desencriptar." : "Por favor, ingrese solo letras minúsculas y sin acentos.";

        Swal.fire({
            title: 'Error!',
            text: mensaje,
            icon: 'error'
          });
        return;
    }
    mostrarOcultarElementos(false);
    const desencriptaTexto = decrypt(inputText);
    console.log(inputText);
    document.getElementById("texto-salida").value = desencriptaTexto;

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Se desencripto el texto correctamente."
      });
}

function copiarTexto(){
    const txtCopia = document.getElementById("texto-salida");

    navigator.clipboard.writeText(txtCopia.value)
        .then(() => {
            Swal.fire({
                title: 'Copiado!',
                text: 'Texto copiado al portapapeles.',
                icon: 'success'
              });
        })
        .catch(err => {
            Swal.fire({
                title: 'Error!',
                text: 'Error al intentar copiar al portapapeles.',
                icon: 'error'
              });
        })
}

function mostrarOcultarElementos(bValor){
    document.getElementById("texto-salida").hidden = bValor;
    document.getElementById("imgResultado").hidden = !bValor;
    document.getElementById("grupo-mensaje").hidden = !bValor;
    document.getElementById("btnCopiar").hidden = bValor;
}


// Cargar los mapas al inicio
document.addEventListener('DOMContentLoaded', () => {
    CargarMapas().catch(error => {
        console.error('Error cargando los mapas:', error);
    });
});