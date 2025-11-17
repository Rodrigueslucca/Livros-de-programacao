const frm = document.querySelector("form") //obtém elementos da página
const resp =  document.querySelector("h3")

frm.addEventListener("submit", (e)=>{ //"Escuta" o evento submit do form
    e.preventDefault() //evita o envio do form
    const numero = Number(frm.inNumero.value) //obtém o número
    let resposta = `Entre ${numero} e 1: `  //String para mostrar a resposta
    for (let i = numero; i > 0; i = i - 1){
        resposta = resposta + i + ", " //resposta acumula números(e vírgulas)
    }
    resp.innerText = resposta   //exibe a resposta

})