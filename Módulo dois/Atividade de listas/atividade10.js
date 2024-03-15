let fila = document.getElementById("fila");

clientesNaFila = [];

inserir.addEventListener('click', () => {
    let cliente = document.getElementById("nomeClientes").value;
    if (clientesNaFila[9] == null) {
        clientesNaFila.push(cliente);
        fila.innerHTML += `<li>${[clientesNaFila.length]}) ${cliente}</li>`;
        console.log(clientesNaFila);
    }else{
        resposta.innerHTML = "Límite de clientes atingido, espere para ser atendido.";
    }
         
})

entregue.addEventListener('click', () => {  
    clientesNaFila.shift();
    resposta.innerHTML = "";
    fila.innerHTML = "";
    for (let i = 0; i < clientesNaFila.length; i++) {
        fila.innerHTML += `<li>${[i+1]}) ${clientesNaFila[i]}</li>`;
    }

});
