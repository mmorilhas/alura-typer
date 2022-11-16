let frase = $(".frase").text();
let numPalavras = frase.split(" ").length;
let tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);


console.log(frase);
console.log(numPalavras);


// text-area

let campoTexto = $(".campo-texto");
campoTexto.on("input", function(){
 
 let conteudo = campoTexto.val();

 let qtdCaracteres = conteudo.length;
 $("#contador-caracteres").text(qtdCaracteres);

 let qtdPalavras = conteudo.split(/\S+/).length - 1;
 $("#contador-palavras").text(qtdPalavras);

})

// contador tempo

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


// reinicar jogo
$("#btn-reiniciar").click(function(){
  console.log("cliquei")
})