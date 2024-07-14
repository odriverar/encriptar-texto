# Challenge: Encriptador de texto.

<p style="text-align: justify">Este proyecto contiene funciones en JavaScript para encriptar y desencriptar texto utilizando un mapa de sustitución, así como para copiar el texto encriptado o desencriptado al portapapeles del usuario.</p>

## Funcionalidades

### Encriptar Texto

<p style="text-align: justify">La función `encrypt(text)` toma un texto de entrada y utiliza un mapa de sustitución para reemplazar cada caracter según las reglas especificadas. Este mapa se carga desde un archivo `JSON/maps.json` para mantener la seguridad de la encriptación.</p>

```javascript
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
````

### Desencriptar Texto
<p style="text-align: justify">La función `decrypt(encryptedText)` realiza la operación inversa de `encrypt`, utilizando el mismo mapa de sustitución para restaurar el texto original.</p>

``` python 
/**
 * Desencripta un texto utilizando un mapa de sustitución
 * @param {string} encryptedText 
 * @returns {string} Texto desencriptado
 */
}
```

### Copiar texto al portapapeles
