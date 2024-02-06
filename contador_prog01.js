let resposta = document.getElementById("resposta")

function contador() {
    let num = Number(document.getElementById("num").value)
    let contador = 0
    let contadorPar = 0

    if ((num > 0 )&&(num <= 20)){
        while (contador < num) {
            contador = contador + 1
            if (contador % 2 == 0) {
                contadorPar = contadorPar + 1
                // console.log("Valor = " + contagem)
                resposta.innerHTML += "pares = " + contador + "<br>"
            }
        }
        
    }else{
        resposta.innerHTML += "Digite um número entre 1 e 20"
    }    


}
    
