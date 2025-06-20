const prompt = require("prompt-sync")(); //adicionna pacote prompt-sync
const pessoas = Number(prompt("Número de pessoas: ")); //lê dados de entrada
const peixes = Number(prompt("Número de peixes: "));
let pagar  //declara a variável pagar
if(peixes <= pessoas){ //condição definida no exemplo
    pagar = pessoas *20;

}else{
    pagar = (pessoas * 20) + ((peixes - pessoas)* 12)
}
console.log("pagar R$: " +pagar.toFixed(2)); //exibe o resultado com duas casas decimais