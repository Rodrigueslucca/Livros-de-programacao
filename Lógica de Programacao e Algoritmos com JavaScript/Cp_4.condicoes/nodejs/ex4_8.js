const prompt = require("prompt-sync")() //adiciona pacote prompt-sync
const valor = Number(prompt("Valor da Compra R$: ")) //lê valor da compra
const aux = Math.floor(valor / 20) // aux =n de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux //operador ternário
const valorParcela = valor / parcelas //cálculo do valor da parcela
console.log("pode pagar em " +parcelas+ "x de R$: "+ valorParcela.toFixed(2)); //exibe o resultado com duas casas decimais)