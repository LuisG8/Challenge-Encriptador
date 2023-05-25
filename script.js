var botonEncriptar = document.querySelector(".Encriptar")
var botonDesencriptar = document.querySelector(".Desencriptar")
var munieco = document.querySelector(".contenedorPicture")
var contenedor = document.querySelector(".contenedorParrafo")
var result = document.querySelector(".textoResultado")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultar();
    var cajatexto = texto()
    result.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultar();
    var cajatexto = texto()
    result.textContent = desencriptarTexto(cajatexto);
}

function texto(){
    var cajatexto = document.querySelector(".cajaTexto")
    return cajatexto.value
}

function ocultar(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){  
    var textoFinal = "";
    var texto = mensaje;
    for(var i = 0; i<texto.length;i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal +"ai";
        }else if(texto[i] == "e"){
            textoFinal = textoFinal +"enter";
        }else if(texto[i] == "i"){
            textoFinal = textoFinal +"imes";
        }else if(texto[i] == "o"){
            textoFinal = textoFinal +"ober";
        }else if(texto[i] == "u"){
            textoFinal = textoFinal +"ufat";
        }else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

function desencriptarTexto(textoEncriptado) {
    var textoFinal = "";
    var texto = textoEncriptado;

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a" && texto[i + 1] == "i") {
            textoFinal = textoFinal + "a";
            i++;
        } else if (texto[i] == "e" && texto.substr(i, 5) == "enter") {
            textoFinal = textoFinal + "e";
            i += 4;
        } else if (texto[i] == "i" && texto.substr(i, 4) == "imes") {
            textoFinal = textoFinal + "i";
            i += 3;
        } else if (texto[i] == "o" && texto.substr(i, 4) == "ober") {
            textoFinal = textoFinal + "o";
            i += 3;
        } else if (texto[i] == "u" && texto.substr(i, 4) == "ufat") {
            textoFinal = textoFinal + "u";
            i += 3;
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".btnCopiar");
    btnCopiar.addEventListener("click", copiar = () =>{
        var contenido = document.querySelector(".textoResultado").textContent;
        navigator.clipboard.writeText(contenido);
    })