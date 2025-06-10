//cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//ouvinte de evento, acionado quando o botao reset for clicado
frm.addEventListener("reset", ()=>{
    resp.innnerText= ""; //limpa o conteúdo do elemento h3 que exibe a resposta
})

//"ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); //evita envio do form

    const nome = frm.inNome.value;  //obtém valores do form
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);

    let peso  //delcara a variável peso
    if(masculino){//se masculino (ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2) // math.pow eleva ao quadrado
    }else{
        peso = 21* Math.pow(altura, 2) // se não for masculino, é feminino
    }
    //apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = nome + ": Seu peso Ideal é " + peso.toFixed(2) + " kg.";
})