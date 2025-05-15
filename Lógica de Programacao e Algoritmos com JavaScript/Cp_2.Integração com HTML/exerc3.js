const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const produto = document.querySelector("#inProduto").value;
    const preco = Number(document.querySelector("#inPreco").value);

    const precoTotal = (preco * 2) + (preco /2);
    const precoTerceiro = preco/2;

    resp1.innerText = (produto + " - Promoção: Leve 3 por R$: " + precoTotal.toFixed(2));
    resp2.innerText = ("O 3º produto sai por R$: "+ precoTerceiro.toFixed(2));
    
});