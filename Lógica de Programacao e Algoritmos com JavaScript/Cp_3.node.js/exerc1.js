const prompt = require("prompt-sync")(); //adiciona pacote para entrada de dados
const salario = Number(prompt("Salário R$: ")); //Lê os dados de entrada
const tempo =  Number(prompt("Tempo(anos): "));
const quadrienios= Math.floor(tempo/4); //Calcula o número de quadrienios
const acrescimo = salario * quadrienios/100; //Calcula o valor do acréscimo

console.log("Quadriênios: " + quadrienios); //Exibe o número de quadrienios
console.log("Salário Final R$: " + salario + acrescimo.toFixed(2)); //Exibe o salário final
