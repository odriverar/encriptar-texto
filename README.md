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

```javascript 
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
<p style="text-align: justify">Para copiar texto al portapapeles, se utiliza el API moderno navigator.clipboard.writeText() que proporciona una forma segura y eficiente de realizar esta operación.</p>

```JavaScript
/**
 * Copiar el texto en el portapapeles
 */
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
```

### Uso de SweetAlert2 para las alertas

<p style="text-align: justify">En este proyecto, utilizamos [SweetAlert2](https://sweetalert2.github.io/) para manejar las alertas de una manera más elegante y moderna. SweetAlert2 es una biblioteca que reemplaza las alertas tradicionales de JavaScript con bonitas ventanas modales.</p>

#### Instalación de SweetAlert2

Para utilizar SweetAlert2 en tu proyecto, primero necesitas incluir la biblioteca. Puedes hacerlo de las siguientes maneras:

1. **A través de CDN:**

   Agrega las siguientes líneas en la sección `<head>` de tu archivo HTML:

   ```html
   <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>```

### Uso

<p style="text-align: justify">Para utilizar estas funciones en tu proyecto:</p>

1.	Asegúrate de cargar el mapa de sustitución desde el archivo `JSON/maps.json`.
2.	Llama a las funciones `encrypt `, `decrypt`según sea necesario en tu aplicación.

```JavaScript
// Ejemplo de uso
const textToEncrypt = 'Hola mundo';
const encryptedText = encrypt(textToEncrypt);
console.log('Texto encriptado:', encryptedText);

const decryptedText = decrypt(encryptedText);
console.log('Texto desencriptado:', decryptedText);
```

## Conclusión 

<p style="text-align: justify">Este proyecto proporciona una implementación sencilla y eficaz para encriptar y desencriptar texto utilizando un mapa de sustitución, junto con una funcionalidad moderna para copiar texto al portapapeles. La integración de SweetAlert2 mejora la experiencia del usuario con alertas estilizadas y personalizadas, proporcionando una interfaz más amigable y atractiva.</p>

### Resumen de Funcionalidades

- **Encriptar y Desencriptar Texto:** Utiliza un mapa de sustitución almacenado en un archivo JSON para transformar el texto de entrada.
- **Copiar Texto al Portapapeles:** Implementa una manera moderna y eficiente de copiar texto al portapapeles utilizando el API de Clipboard.
- **Alertas Personalizadas:** Mejora la interacción con el usuario mediante el uso de SweetAlert2 para mostrar alertas estilizadas y personalizadas.

### Cómo Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una rama nueva para tu función o corrección de errores (`git checkout -b main`).
3. Realiza tus cambios y confirma los cambios (`git commit -m 'Descripción del cambio'`).
4. Empuja tus cambios a la rama (`git push origin main`).
5. Abre una solicitud de pull en GitHub.

### Contacto

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio o contactarnos a través de odriverar@gmail.com.

---

>Gracias por utilizar este proyecto. Esperamos que estas herramientas te sean útiles.