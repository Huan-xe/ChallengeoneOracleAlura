var susurro = document.querySelector(".susurro");
var muneco = document.querySelector(".muneco");


function btnEncriptar() {
    var textoEncriptado = encriptar(susurro.value)
    muneco.value = textoEncriptado;
    muneco.style.backgroundImage = "none";
    susurro.value = "";
}

function encriptar(letraEncriptada) {
    var llave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    

    for (var i = 0; i < llave.length; i++) {
        if (letraEncriptada.includes(llave[i][0])) {
            letraEncriptada = letraEncriptada.replaceAll(llave[i][0], llave[i][1])
        }
    }
    return letraEncriptada;
}

function btnDesencriptar() {
    var textoDesencriptado = desencriptar(susurro.value)
    muneco.value = textoDesencriptado;
    muneco.style.backgroundImage = "none";
    susurro.value = "";
}


function desencriptar(letraDesencriptada) {
    var llave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    

    for (var i = 0; i < llave.length; i++) {
        if (letraDesencriptada.includes(llave[i][1])) {
            letraDesencriptada = letraDesencriptada.replaceAll(llave[i][1], llave[i][0])
        }
    }
    return letraDesencriptada;
}   

function copiar(){
    muneco.select();
    navigator.clipboard.writeText(muneco.value);
    muneco.value = "";
    alert("Texto copiado");
}
