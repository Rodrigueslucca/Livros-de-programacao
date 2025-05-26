const prompt =require('prompt-sync')(); //adiciona pacote para entrada de dados
const num1 = Number(prompt('Digite o primeiro número: ')); //lê número
const num2= Number(prompt('Digite o segundo número: ')); //lê número
const soma = num1 + num2
console.log("A soma dos números é: " + soma)