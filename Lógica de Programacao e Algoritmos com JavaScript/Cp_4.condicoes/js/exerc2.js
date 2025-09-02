const frm = document.querySelector("form");
const resp =  document.querySelector("h3");
//ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //evita envio do form
    
    //obtém a velocidade permitida do input
    const velocidadePermitida = Number(frm.inPermitida.value); 
    const velocidadeCondutor = Number(frm.inCondutor.value);

    //verifica se a velocidade do condutror é maior que a permitida
    if(velocidadeCondutor <= velocidadePermitida){
        resp.innerText = "Situação: Sem Multa"
    }else if(velocidadeCondutor <= velocidadePermitida * 1.2){
        resp.innerText = "Situação: Multa Leve"
    }else {
        resp.innerText = "Situação: Multa Grave"
    }

});