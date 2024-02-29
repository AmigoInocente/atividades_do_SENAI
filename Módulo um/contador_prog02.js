let resposta = document.getElementById('resposta')

function contador() {
    let num = Number(document.getElementById("num").value)
    let contagem = 0

    do {
        contagem += 1

        console.log("Valor = ", contagem)
        resposta.innerHTML += "Valor = "+ contagem+"<br>"
    } while (contagem < num);
}