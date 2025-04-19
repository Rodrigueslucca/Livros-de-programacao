//cria referência ao form e ao elemnto h3.
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//Cria  um "ouvinte" de evento, acionado quando o botão submit for clicado.
frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value; //obtém o nome digitado no form.
    resp.innerText = "Olá" + nome //exibe a resposta do programa.
    e.preventDefault(); //evita envio do form.

})