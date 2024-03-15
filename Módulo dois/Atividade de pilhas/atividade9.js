let lista = document.getElementById("lista");

pacotesNoCaminhao = [];

inserir.addEventListener('click', () => {
    let pacote = document.getElementById("conteudoPacotes").value;
    if (pacotesNoCaminhao[9] == null) {
        pacotesNoCaminhao.push(pacote);
        lista.innerHTML += `<li>${[pacotesNoCaminhao.length]}) ${pacote}</li>`;
        console.log(pacotesNoCaminhao);
    }else{
        resposta.innerHTML = "Límite de pacotes atingido, descarregue o caminhão assim que possivel.";
    }
         
})

retirar.addEventListener('click', () => {
    pacotesNoCaminhao.pop();
    resposta.innerHTML = "";
    lista.innerHTML = "";
    for (let i = 0; i < pacotesNoCaminhao.length; i++) {
        lista.innerHTML += `<li>${[i+1]}) ${pacotesNoCaminhao[i]}</li>`;
    }

});
