const frm = document.querySelector("form");
const resp = document.querySelector("#info");
const resp2 = document.querySelector("#tipo");

frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //evita envio do form

    let a = Number(frm.valorA.value);
    let b = Number(frm.valorB.value);
    let c = Number(frm.valorC.value);

    if(a + b < c || a + c < b || b + c < a ){
        resp.innerText = "Os lados não podem formar um triângulo";
        resp2.innerText = "";

    }else if(a == b && a == c && b == c){
        resp.innerText = "Os lados podem formar um trângulo";
        resp2.innerText = "Tipo: Equilátero";
    }else if(a == b || a == c || b == c){
        resp.innerText = "Os lados podem formar um triângulo";
        resp2.innerText="Tipo: Isósceles";

    }else if(a != b && a != c && b != c){
        resp.innerText = "Os lados podem formar um triângulo";
        resp2.innerText="Tipo: Escaleno";
    }
})