function foco() {
  document.getElementById("textoencriptado").focus();
}

function encriptar(){
 

   let sentencia = document.getElementById("textoencriptado").value.trimStart();
    sentencia;
   sentencia = sentencia
   .replace(/e/g,"enter")
   .replace(/i/g,"imes")
   .replace(/a/g,"ai")
   .replace(/o/g,"ober")
   .replace(/u/g,"ufat");

   sentencia;
   document.getElementById("textboxdesencriptar").value = sentencia;
   desparecerMuneco();
  
  if(sentencia == 0){
    aparecerMuneco();
    alert("No has ingresado ningun texto")
  }
}

function desencriptar(){
  let sentencia = document.getElementById("textoencriptado").value;
  sentencia;
  sentencia = sentencia
  .replace(/enter/g,"e")
  .replace(/imes/g,"i")
  .replace(/ai/g,"a")
  .replace(/ober/g,"o")
  .replace(/ufat/g,"u");
  sentencia;
  document.getElementById("textboxdesencriptar").value = sentencia;
  desparecerMuneco();
  if(sentencia == 0){
    aparecerMuneco();
    alert("No has ingresado ningun texto")
  }
}

function copiar(){
  var frase = document.querySelector("#textboxdesencriptar");
  frase.select();
  document.execCommand("copy");
  alert("Mensaje copiado al portapapeles");
  limpiar();
  aparecerMuneco();
}

function desparecerMuneco(){
  document.getElementById("Muneco").style.visibility = "hidden";
}
function aparecerMuneco(){
  document.getElementById("Muneco").style.visibility = "";
}


function limpiar() {
  document.getElementById("textoencriptado").value = "";
  document.getElementById("textboxdesencriptar").value = "";
}
