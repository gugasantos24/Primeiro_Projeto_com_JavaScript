alert("Boas Vindas ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual a número secreto
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break; // serve para parar o código
    } else {
        if (chute > numeroSecreto) {
          alert (`O número secreto é menor que ${chute}`);
        } else {
          alert(`O número secreto é maior que ${chute}`);
      }
      // tentativas = tentativas = 1
      tentativas++
   }
}

let palavraTentativa = tentativas > 1 ? "tentantivas" : "tentantiva";
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
// Faz a mesma função que as duas linhas de códigos de cima
// if(tentativas > 1 ) {
//   a lert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//  } else {
//    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//  }