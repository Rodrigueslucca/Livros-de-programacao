const frm = document.querySelector("form");
const resp = document.querySelector("h3"); 

frm.addEventListener("submit",(e) => {
    e.preventDefault();

    const fruta= frm.fruta.value;
    const numero = Number(frm.numero.value);
    let resultado = "";

    for(let i =1; i <= numero; i++){
        resultado += fruta + " * "
    }
    resp.innerText = resultado;
});