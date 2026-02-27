 const prompt = require("prompt-sync")()
 const valor = Number(prompt("Valor R$: ")) //Lê o valor do produto
 const num = Number(prompt("N de Parcelas: ")) //Lê o numero de parcelas
 const valorParcelas = Math.floor(valor / num) //calcula valor sem decimais
 const valorFinal = valorParcelas + (valor % num) //calcula parcela final
 for(let i = 1; i< num; i++){
    console.log(`${i}ª Parcela: R$ ${valorParcelas.toFixed(2)}`) //imprime as parcelas
 }
 console.log(`${num}ª Parcela: R$ ${valorFinal.toFixed(2)}`) //imprime a parcela final, que pode ser diferente das anteriores por causa do arredondamento