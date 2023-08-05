// Questão 01

let altura = Number(prompt("Digite a altura do retângulo:"));

while (isNaN(altura) || altura <= 0) {
  altura = prompt("Digite um valor numérico positivo para a altura:");
}

let largura = Number(prompt("Digite a largura do retângulo:"));

while (isNaN(largura) || largura <= 0) {
  largura = prompt("Digite um valor numérico positivo para a largura:");
}

console.log(`A área do retângulo é ${altura * largura}.`);
