const prompt = require('prompt-sync')();
const pesoKg= Number(prompt("Peso da Ração (Kg): "));
const consumo = Number(prompt("Consumo Diário (gr): ")); 
const pesoGr = pesoKg * 1000; //Calcula o número de dias                  
const duracao = Math.floor(pesoGr / consumo); //Calcula o número de dias que a ração dura
const sobra = pesoGr % consumo; //Calcula a sobra de ração
console.log("Dias de ração: " + duracao + " dias"); //Exibe o número de dias 
console.log("Sobra de ração: " + sobra + "gr"); //Exibe a sobra de ração                     
