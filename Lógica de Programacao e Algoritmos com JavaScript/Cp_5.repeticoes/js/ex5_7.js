const frm =  document.querySelector("form") //obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{  // "escuta" evento submit do form.
    e.preventDefault() //evita envio do form
    const num = Number(frm.inNumero.value) // obtém o número informado nom fomrulário
    let estrela = ""  //variável que irá concatenar as estrelas/traços
    for(let i = 1; i <= num; i++){
        if(i% 2 == 1){
            estrelas = estrelas + "*" //na posição ímpar do i: *
        }else{
            estrelas = estrelas + "-" //na posição par: -
        }
    }
    resp.innerText = estrelas  //exibe as estrelas
})