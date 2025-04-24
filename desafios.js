let nome = 'Gustavo';
console.log(`Bem vindo ${nome}`)
alert(`Olá ${nome}`);
let linguagem = prompt("Qual linguagem de programação você mais gosta? ")
console.log(linguagem);

let valor1 = 6;
let valor2 = 4;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é ${resultado}`);

let idade = prompt("Diga sua idade ")
idade = Number(idade);

if (idade < 18){
console.log("Você é menor de idade");
} else {
console.log("Você é maior de idade");
}

let numero1 = prompt("Diga um numero: ");
numero1 = Number(numero1);

if (numero1 >= 1){
  console.log("Esse número é positivo");
} else if (numero1 <= -1){
  console.log("Esse número é negativo")
} else {
  console.log("Esse número é zero")
}

let numero2 = 1;

while (numero2 <= 10){
  console.log(numero2);
  numero2++;
}

let numero3 = parseInt(Math.random() * 10 + 1);

console.log(numero3);

let numero4 = parseInt(Math.random() * 1000 + 1);

console.log(numero4);