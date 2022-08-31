var frase="";
var llaves= [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"], ["u","ufat"]];

var inputEncriptado = document.querySelector("#ingresoTexto");
var outputDesencriptado = document.querySelector("#mensaje");
document.getElementById("btnCopiar").style.display="none";

function encriptarVocales(frase)
{
    frase = frase.toLowerCase();//convierte en minuscula la frase ingresada

    for(var i = 0; i < llaves.length; i++){
        if (frase.includes(llaves[i][0])){
            frase = frase.replaceAll(llaves[i][0],llaves[i][1]);
        }
    }
    return frase
}
function desencriptarVocales(frase)
{
    frase= frase.toLowerCase(); 

    for(var i = 0; i < llaves.length; i++){
        if (frase.includes(llaves[i][1])){
           frase = frase.replaceAll(llaves[i][1],llaves[i][0]);
        }
    }
    return frase;
}
function btnEncriptar()
{
    if(inputEncriptado.value=="")
    {
        alert("Ingrese texto para seguir");

    }
    else
    {
        var textoEncriptado = encriptarVocales(inputEncriptado.value);
        outputDesencriptado.value = textoEncriptado;
        inputEncriptado.value = "";

        document.getElementById("btnCopiar").style.display="";
        document.getElementById("ningunMensaje").style.display="none";
        document.getElementById("ingresar").style.display="none";
    }

    
}
 function btnDesencriptar()
 {
    if(inputEncriptado.value=="")
    {
        alert("Ingrese texto para seguir");

    }
    else
    {
        var textoEncriptado = desencriptarVocales(inputEncriptado.value);
        outputDesencriptado.value = textoEncriptado;
        inputEncriptado.value = "";

        document.getElementById("btnCopiar").style.display="";
        document.getElementById("ningunMensaje").style.display="none";
        document.getElementById("ingresar").style.display="none";
    }
    
 }
 function btnCopiar()
 {
    outputDesencriptado.select(); 
    inputEncriptado.value=outputDesencriptado.value;
    outputDesencriptado.value = "";
    alert("Texto copiado");
 }
