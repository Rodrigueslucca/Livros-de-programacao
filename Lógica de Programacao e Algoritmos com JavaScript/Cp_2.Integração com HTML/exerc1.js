const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) =>{
    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);

    const valorSemCentavos = Math.floor(preco);
    resp1.innerText = ("Promoção de " +medicamento);
    resp2.innerText = ("Leve 2 Por apenas R$:" + valorSemCentavos.toFixed(2));
    e.preventDefault();
})
