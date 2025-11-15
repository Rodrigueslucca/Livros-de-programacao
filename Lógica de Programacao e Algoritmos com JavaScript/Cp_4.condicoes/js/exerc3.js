const frm = document.querySelector("form");
const resp = document.querySelector("#tempo");
const resp2 = document.querySelector("#troco");

//ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //evita envio do form

    //obtém os valores dos inputs
    let num1 = Number(frm.valormoeda.value).toFixed(2);
    let troco = Number().toFixed(2);
   
 if(num1 == 1.00){
    resp.innerText = `Tempo: 30 minutos`;
    resp2.innerText= " " 
}else if(num1 ==  2.00){
    troco = num1 - 1.75;
    resp.innerText= "Tempo: 60 minutos";
    resp2.innerText= "Troco: R$ "+ troco
}else if(num1 == 3.00){
    resp.innerText= "Tempo: 120 minutos";
    resp2.innerText= " "
}else{
    resp.innerText= "Valor Insuficiente";
}


    
})
