// Questão 01
/*
let altura = Number(prompt("Digite a altura do retângulo:"));

while (isNaN(altura) || altura <== 0) {
  altura = prompt("Digite um valor numérico positivo para a altura:");
}

let largura = Number(prompt("Digite a largura do retângulo:"));

while (isNaN(largura) || largura <== 0) {
  largura = prompt("Digite um valor numérico positivo para a largura:");
}

console.log(`A área do retângulo é ${altura * largura}.`);
*/
//Questão 02

let numero = Number(prompt("Digite um número:"));

while (isNaN(numero)) {
  numero = prompt("Digite um valor numérico:");
}

if (numero % 2 === 0) {
  console.log("O número digitado é par.");
} else {
  console.log("O número digitado é ímpar.");
}