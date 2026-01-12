const frm = document.querySelector("form") //obtém elemntos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => { //"escuta" evento submit do form
    e.preventDefault() //evita envio do form
    const num = Number(frm.inNumero.value)//obtém número informado
    let temDivisor = 0  //declara e inicializa contador
    for(let i = 2; i <= num / 2; i++){ //percorre todos os possíveis divisores de num
        if(num % i == 0){ //se tem divisor
            temDivisor = 1  //muda o flag
            break // sai da repetição
            numDivisores++ //se é, incrementa contador
         }
        }
        if(num > 1 && !temDivisor) { //se num > 1 e não possui divisor
            resp.innerText = `${num} É primo`
        }else {
            resp.innerText = `${num} Não é primo`
         }
        })

        /*Este programa recebe um número e informa se ele é ou não primo*/ 