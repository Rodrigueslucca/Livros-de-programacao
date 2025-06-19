const frm = document.querySelector("form");
const resp100 = document.querySelector("#outNota100");
const resp50 = document.querySelector("#outNota50");
const resp10 = document.querySelector("#outNota10");

frm.addEventListener("submit", (e) => { //"escuta" evento submit do form
    e.preventDefault()   //evita envio do form
    const saque = Number(frm.inSaque.value) //obtém valor do saque
    if(saque % 10 ! = 0) //se sque não é multiplo de 10
    alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
    frm.inSaque.focus()
    return
})


 