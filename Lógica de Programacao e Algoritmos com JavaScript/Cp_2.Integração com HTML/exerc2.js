const frm = document.querySelector("form");
const resp1= document.querySelector("#outResp1");

frm.addEventListener("submit", (e)=>{
    const valorDeUso = Number(frm.invalorDeUso.value);
    const tempoDeUso = Number(frm.intempoDeUso.value);
    
    
    const blocosDe15Min = Math.ceil(tempoDeUso /15);
    
    const valorTotal = blocosDe15Min * valorDeUso;
    resp1.innerText = "Valor a pagar R$: " +valorTotal.toFixed(2);
    e.preventDefault();
})