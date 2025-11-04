const frm = document.querySelector("form");
const resp =  document.querySelector("h3");
//ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //evita envio do form
    
    //obtém a velocidade permitida do input
    const velocidadePermitida = Number(frm.velPermitida.value); 
    const velocidadeCondutor = Number(frm.velCondutor.value);

    //verifica se a velocidade do condutror é maior que a permitida
    /*if(velocidadeCondutor <= velocidadePermitida){
        resp.innerText = "Situação: Sem Multa"
    }else if(velocidadeCondutor <= velocidadePermitida * 1.2){
        resp.innerText = "Situação: Multa Leve"
    }else {
        resp.innerText = "Situação: Multa Grave"
    }
     */
    //mesma situação  com operador ternário
    const situacao = (velocidadeCondutor <= velocidadePermitida) ? "Sem Multa" :
                    (velocidadeCondutor <= velocidadePermitida * 1.2) ? "Multa Leve" :
                    "Multa Grave";
    resp.innerText = `Situação: ${situacao}`;

}
);