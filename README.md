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

``` javascript 
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
```

### Copiar texto al portapapeles
