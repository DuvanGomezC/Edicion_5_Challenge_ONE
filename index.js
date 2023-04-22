function encriptar(){

    let texto = document.getElementById("texto").value;
     let tituloMensaje = document.getElementById("titulo-mensaje");
     let parrafo = document.getElementById("parrafo");
     let dibujo = document.getElementById("dibujo");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        dibujo.src = "./img/encriptado.png";

        }else {
            dibujo.src = "./img/Muñeco.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            mostrarAlerta( "Debes ingresar algun texto");
    }
}

function desencriptar(){

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let dibujo = document.getElementById("dibujo");

    let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        dibujo.src = "./img/desencriptado.png";

        }else {
            dibujo.src = "./img/Muñeco.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            mostrarAlerta( "Debes ingresar algun texto");
    }
}


function copiar(){

    let elemento = document.getElementById("texto")

if (elemento.value === "") {
    mostrarAlerta("No hay ningún mensaje para copiar")
} else {
    navigator.clipboard.writeText(texto.value)
    .then(() => mostrarAlerta ("El contenido se a copiado exitosamente."))
    .catch(() => mostrarAlerta ("No se pudo copiar el contenido."))
}


}


function mostrarAlerta(mensaje) {
    const alerta = document.getElementById('miAlerta');
    const textoAlerta = document.getElementById('textoAlerta');
    
    textoAlerta.innerText = mensaje;
    alerta.classList.remove('oculto');
    
    setTimeout(() => {
      alerta.classList.add('oculto');
    }, 3000); // tiempo de duración de la alerta
  }