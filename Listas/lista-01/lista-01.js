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

//Questão 08

let numeros = [1, 2, 3, 4, 9, 5, 6];

console.log(Math.max(...numeros));

//Questão 09

function geraNumeroAleatorio(a, b) {
  return Math.floor(Math.random() * b) + 1 + a;
}

console.log(geraNumeroAleatorio(1, 10));

//Questão 10

let numeroDigitado = Number(prompt("Digite um número:"));

function verificaPrimo(numero) {
  let primo = true;
  for (let i = 2; i < numero / 2; i++) {
    if (numero % i === 0) {
      primo = false;
    }
  }

  if (primo) {
    console.log("O número digitado é primo!");
  } else {
    console.log("O número digitado não é primo.");
  }
}

verificaPrimo(numeroDigitado);

//Questão 11

let string5 = "5";
let numero2 = 2;

let multiplicacao = string5 * numero2;
console.log(multiplicacao, typeof multiplicacao);
// ao multiplicar uma string por um número, por se tratar de uma operação exclusivamente matemática, o JS faz a conversão da string para número

//Questão 12

let numero = Number("123");

console.log(numero);

//Questão 13

let soma = 12 + "numero";
console.log(soma, typeof soma);

//Questão 14
//o operador de soma é também utilizado como operador de concatenação e, neste caso, ocorre a conversão do número para string.

//Questão 15

let nula = null;
let indefinida = undefined;

console.log(nula === indefinida);

//Questão 16

function verificaVariavel(variavel) {
  if (typeof variavel === "function") {
    console.log("A variável é uma função.");
  } else {
    console.log("A variável não é uma função.");
  }
}

let numero = 10;

verificaVariavel(verificaVariavel);
verificaVariavel(numero);
*/
//Questão 18

let resultado = ((10 + 5) * 3) / 20;
console.log(resultado);
