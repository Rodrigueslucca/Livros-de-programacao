const prompt= require('prompt-sync')(); //adiciona pacote para entrada de dados
const veiculo = prompt("Veículo: ")  //lê os dados de entrada
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.50        //calcula valor da entrada
const parcela = (preco * 0.50)/12   //calcula valor da parcela
console.log("Promoção: "+ veiculo)  //exibe as respostas
console.log("Entreada de R$: "+entrada.toFixed(2))
console.log("+12x de R$: "+ parcela.toFixed(2))
//toFixed(2) formata o número para duas casas decimais