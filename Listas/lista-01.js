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

//Questão 03

let frase = prompt("Digite uma frase:");
let fraseMinusla = frase.toLowerCase();

if (fraseMinusla.includes("javascript")) {
  console.log("Sua frase contém JavaScript!");
} else {
  console.log("Que pena, sua frase não contém o que buscávamos.");
}

//Questão 04

let frase1 = prompt("Digite uma frase:");
let frase2 = prompt("Digite outra frase:");

let fraseMinuscula1 = frase1.toLowerCase();
let fraseMinuscula2 = frase2.toLowerCase();

if (fraseMinuscula1 === fraseMinuscula2) {
  console.log("As frases são iguais!");
} else {
  console.log("As frases são diferentes.");
}

//Questão 05

let lista1 = [];
let lista2 = [];

let item1 = prompt("Digite qualquer coisa (1/6):");
lista1.push(item1);
let item2 = prompt("Digite qualquer coisa (2/6):");
lista1.push(item2);
let item3 = prompt("Digite qualquer coisa (3/6):");
lista1.push(item3);
let item4 = prompt("Digite qualquer coisa (4/6):");
lista1.push(item4);
let item5 = prompt("Digite qualquer coisa (5/6):");
lista2.push(item5);
let item6 = prompt("Digite qualquer coisa (6/6):");
lista2.push(item6);

console.log(lista1);
console.log(lista2);

function juntaListas(primeiraLista, segundaLista) {
  for (i = 0; i < segundaLista.length; i++) {
    primeiraLista.push(segundaLista[i]);
  }
  return primeiraLista;
}

let listasJuntas = juntaListas(lista1, lista2);

console.log(listasJuntas);

// questão 06

let numeros = [1, 2, 3, 4, 5];

let somaNumeros = numeros.reduce((numero, soma) => soma + numero, 0);

console.log(`A média é ${somaNumeros / numeros.length}.`);

//Questão 07

const dataHoraAtual = new Date();

function transformaData(data) {
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

dataHoraTransformada = transformaData(dataHoraAtual);

console.log(dataHoraTransformada);
*/
//Questão 08

let numeros = [1, 2, 3, 4, 9, 5, 6];

console.log(Math.max(...numeros));
