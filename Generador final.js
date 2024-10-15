let cantidad = document.getElementById('cantidad');
let button = document.getElementById('generar');
let contrasenaInput = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');

const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// Función para generar la contraseña
function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor a 8");
        return;
    }

    let contrasena = '';
    for (let i = 0; i < numeroDigitado; i++) {
        const indice = Math.floor(Math.random() * cadenaDeCaracteres.length);
        contrasena += cadenaDeCaracteres[indice];
    }

    contrasenaInput.value = contrasena;

    // Validar la fortaleza de la contraseña generada
    validarContrasena(contrasena);
}

// Función para limpiar los campos
function limpiar() {
    cantidad.value = ''; 
    contrasenaInput.value = ''; 
    mensaje.textContent = ''; 
}

// Función para validar la fortaleza de la contraseña
function validarContrasena(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneSimbolo = /[!@#$%^&*()]/.test(password);
  
    if (tieneMayuscula && tieneNumero && tieneSimbolo) {
      mensaje.textContent = "La contraseña es fuerte.";
      mensaje.style.color = "green";
    } else {
      mensaje.textContent = "La contraseña es débil. Debe incluir al menos una mayúscula, un número y un símbolo especial.";
      mensaje.style.color = "red";
    }
}






