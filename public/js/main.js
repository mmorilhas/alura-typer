$(document).ready(function(){
  atualizaFrase();
  contaInput();
  calculaTempo();
  $("#btn-reiniciar").click(reiniciarJogo);
})

function atualizaFrase(){
  let frase = $(".frase").text();
  let numPalavras = frase.split(" ").length;
  let tamanhoFrase = $("#tamanho-frase");
  
  tamanhoFrase.text(numPalavras);
  
}


// text-area
let campoTexto = $(".campo-texto");

function contaInput(){
  campoTexto.on("input", function(){
 
    let conteudo = campoTexto.val();
   
    let qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
   
    let qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
   
   })
}


// contador tempo
let tempoInicial = $("#contador-tempo").text();

function calculaTempo(){
  let contadorTempo = $("#contador-tempo").text();
  campoTexto.one("focus", function(){
    let cronometroID = setInterval(function(){
      contadorTempo--;
      $("#contador-tempo").text(contadorTempo);
      if(contadorTempo < 1){
        campoTexto.attr("disabled", true);
        clearInterval(cronometroID);
      }
    }, 1000);
    
  });
}



// reiniicar jogo
function reiniciarJogo(){

  campoTexto.attr("disabled", false);
  campoTexto.val("");
  $("#contador-tempo").text(tempoInicial);
  $("#contador-caracteres").text("0");
  $("#contador-palavras").text("0");
  calculaTempo(); 
  
}


