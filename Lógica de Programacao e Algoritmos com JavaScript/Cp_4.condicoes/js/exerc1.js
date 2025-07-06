const frm = document.querySelector("form");
const resp = document.querySelector("h3");
//ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita envio do form
    const numero = Number(frm.inNumero.value); //obtém o número do input
    
    if (numero % 2 === 0) { //verifica se é par
        resp.innerText = "O número " + numero + " é Par.";
    } else { //se não for par, é ímpar
        resp.innerText = "O número " + numero + " é Ímpar.";
    }

})