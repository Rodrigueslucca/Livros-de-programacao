const frm = document.querySelector("form"); //obtém elementos da página
const resp =  document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault(); //evita o envio do formulário

    const numero = Number(frm.inNumero.value); //obtém número digitado no form
    const raiz = Math.sqrt(numero); //calcula a raiz quadrada do número

    if (Number.isInteger(raiz)){ //Se valor da raiz for um número intero
        resp.innerText="Raiz: " + raiz; //mostra a raiz
        
    }else {
        resp.innerText = "Não há raiz exata para o " + numero;
    }


})