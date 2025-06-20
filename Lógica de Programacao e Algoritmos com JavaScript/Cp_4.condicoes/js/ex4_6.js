const frm = document.querySelector("form");
const nota100 = document.querySelector("#outNota100");
const nota50 = document.querySelector("#outNota50");
const nota10 = document.querySelector("#outNota10");

frm.addEventListener("submit", (e) => { //"escuta" evento submit do form
    e.preventDefault();   //evita envio do form
    const saque = Number(frm.inSaque.value); //obtém valor do saque
    if(saque % 10 != 0){ //se saque não é multiplo de 10
    alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
    frm.inSaque.focus();
    return;
}
const notasCem = Math.floor(saque/100)//calcula notas de 100
let resto = saque % 100 //quanto sobra para pagar
const notasCinquenta = Math.floor(resto / 50); //calcula notas de 50
resto = resto % 50 //quanto ainda sobra
const notasDez = Math.floor(resto / 10); // calcula notas de 10
if(notasCem > 0 ){  //exibe as notas se houver
    nota100.innerText = "Notas de R$ 100: " +notasCem;
}
if (notasCinquenta > 0){
    nota50.innerText = "Notas de R$ 50: " +notasCinquenta;
}else{
    nota50.innerText = ""; //limpa o campo se não houver notas de 50
}
if (notasDez > 0){
 nota10.innerText = "Notas de R$ 10: " +notasDez;
}else{
    nota10.innerText = ""; //limpa o campo se não houver notas de 10

}

})


 