let resposta = document.getElementById('resposta');

let matrizMes = []
let matrizSalario = []
let matrizImposto = []
let matrizDesconto = []
let valorTotal = 0;

function inserir() {
    let mes = document.getElementById('mes').value;
    let salario = Number(document.getElementById('salario').value);
    console.log(mes)
    console.log(salario)

    if ((mes.value != " ")&&(salario != 0)) {

        if (matrizMes[11] == null && matrizSalario[11] == null) {
            matrizMes.push(mes);
            matrizSalario.push(salario);

            let deducao = 0
            let aliquota = 0
            
            
            if (salario > 2112.01 && salario <= 2826.65) {
                deducao = 158.40
                aliquota = 0.075
                
            }else if(salario > 2826.66 && salario <= 3751.05) {
                deducao = 370.40
                aliquota = 0.15

            }else if(salario > 3751.06 && salario <= 4664.68) {
                deducao = 651.73
                aliquota = 0.225

            }else if(salario > 4664.68) {
                deducao = 884.96
                aliquota = 0.275

            }else if(salario <= 2112){
                deducao = 0
                aliquota = 0
            }

            let imposto = (salario * aliquota) - deducao
            matrizDesconto.push(salario - imposto)

            matrizImposto.push(imposto.toFixed(2));
            console.log(matrizImposto)
        }else{
            resposta.innerHTML = 'Todos os campos foram preenchidos, aperte no segundo botão para mostrar o resultado'
        }
    }else{
        resposta.innerHTML = 'Por favor, preencha todos os campos'
    }
}

function mostrar() {

    for (let i = 0; i < matrizDesconto.length; i++) {
        valorTotal += matrizDesconto[i]
    }
    
    console.log(valorTotal)

    if(matrizMes[11]!= null){
    if (valorTotal < 28559.70) {
        resposta.innerHTML =    "--Matriz de meses-- <br>" +
            "["+ matrizMes[0] +','+ matrizMes[1] +','+ matrizMes[2] + "] <br>"
            +"["+ matrizMes[3] +','+ matrizMes[4] +','+ matrizMes[5] + "] <br>"
            +"["+ matrizMes[6] +','+ matrizMes[7] +','+ matrizMes[8] + "] <br>"
            +"["+ matrizMes[9] +','+ matrizMes[10] +','+ matrizMes[11] + "] <br>"
            +"<br>" 
        resposta.innerHTML +=   "--Matriz de salários-- <br>" +
            "["+ matrizSalario[0] +','+ matrizSalario[1] +','+ matrizSalario[2] + "] <br>"
            +"["+ matrizSalario[3] +','+ matrizSalario[4] +','+ matrizSalario[5] + "] <br>"
            +"["+ matrizSalario[6] +','+ matrizSalario[7] +','+ matrizSalario[8] + "] <br>"
            +"["+ matrizSalario[9] +','+ matrizSalario[10] +','+ matrizSalario[11] + "] <br>"
            +"<br>" 
        resposta.innerHTML += "Por seu salário anual ser menor que R$28.559,70, o imposto não irá ser retirado de seu salário."
    }else{
        resposta.innerHTML =    "--Matriz de meses-- <br>" +
            "["+ matrizMes[0] +','+ matrizMes[1] +','+ matrizMes[2] + "] <br>"
            +"["+ matrizMes[3] +','+ matrizMes[4] +','+ matrizMes[5] + "] <br>"
            +"["+ matrizMes[6] +','+ matrizMes[7] +','+ matrizMes[8] + "] <br>"
            +"["+ matrizMes[9] +','+ matrizMes[10] +','+ matrizMes[11] + "] <br>"
            +"<br>" 

        resposta.innerHTML +=   "--Matriz de salários com desconto-- <br>" +
            "["+ matrizDesconto[0] +','+ matrizDesconto[1] +','+ matrizDesconto[2] + "] <br>"
            +"["+ matrizDesconto[3] +','+ matrizDesconto[4] +','+ matrizDesconto[5] + "] <br>"
            +"["+ matrizDesconto[6] +','+ matrizDesconto[7] +','+ matrizDesconto[8] + "] <br>"
            +"["+ matrizDesconto[9] +','+ matrizDesconto[10] +','+ matrizDesconto[11] + "] <br>"
            +"<br>" 
        resposta.innerHTML +=   "--Matriz do Imposto-- <br>" +
            "["+ matrizImposto[0] +','+ matrizImposto[1] +','+ matrizImposto[2] + "] <br>"
            +"["+ matrizImposto[3] +','+ matrizImposto[4] +','+ matrizImposto[5] + "] <br>"
            +"["+ matrizImposto[6] +','+ matrizImposto[7] +','+ matrizImposto[8] + "] <br>"
            +"["+ matrizImposto[9] +','+ matrizImposto[10] +','+ matrizImposto[11] + "] <br>"
    }

    
    
        
        
        
    }
}