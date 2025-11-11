const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //evita envio do form

    //obtém os valores dos inputs
    const num1 = Number(frm.num1.value);
    const troco = Number(frm.troco.value);

    
    let tempo, preco;
    if(num1 === 1){
        tempo = "30 min";
        preco = 1.00;
    }else if(Math.abs(num1 - 1.75) < 0.001){
       tempo="60 min";
       preco = 1.75;
    }else if(Math.abs(num1 - 3.00) < 0.001){
      tempo = "120 min";
      preco = 3.00;     
    }else {
        resp.innerText = "Produto inválido";
        resp2.innerText = "";
        return;
    }

    resp.innerText = `Tempo: ${tempo}`;

    //calcula e exibe o troco / situação do pagamento

    if(troco < preco){
        resp2.innerText = `Valor insuficiente. Faltam R$ ${(preco - troco).toFixed(2)}`;

    }else if (Math.abs(troco - preco) < 0.001){
        resp2.innerText = "Pagamento exato. Sem Troco";
    }else {
        resp2.nnerText = `Troco: R$ ${(troco - preco).toFixed(2)}`;
    }
})
