$(document).ready(function(){
  atualizaFrase();
  contaInput();
  calculaTempo();
  mudarCoresBorda();
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

function mudarCoresBorda(){
  
  let frase = $(".frase").text();
  campoTexto.on("input", function(){
    let digitado = campoTexto.val();
  
    if(frase.startsWith(digitado)){
      campoTexto.addClass("borda-verde");
      campoTexto.removeClass("borda-vermelha")
    }else{
      campoTexto.removeClass("borda-verde")
      campoTexto.addClass("borda-vermelha")
  
    }
    
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
        clearInterval(cronometroID);
        campoTexto.attr("disabled", true);
        campoTexto.toggleClass("campo-desativado");
      }
    }, 1000);
    
  });
}

// reiniciar jogo
function reiniciarJogo(){
  campoTexto.attr("disabled", false);
  campoTexto.val("");
  $("#contador-tempo").text(tempoInicial);
  $("#contador-caracteres").text("0");
  $("#contador-palavras").text("0");
  calculaTempo(); 
  campoTexto.toggleClass("campo-desativado");
  campoTexto.removeClass("borda-vermelha")
  campoTexto.removeClass("borda-verde")
}



//placar
function inserePlacar(){
  let tabela = $(".placar").find("tbody");

}
