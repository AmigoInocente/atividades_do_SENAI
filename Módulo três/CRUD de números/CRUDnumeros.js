let resposta = document.getElementById('resposta');

let listaDeNumeros = []

function comecar(){
    resposta.innerHTML = 'Digite a opção que você quer selecionar: <br>'
    +"A) Cadastrar um novo número. <br>"
    +"B) Buscar um número. <br>"
    +"C) Excluir um número. <br>"
    +"D) Listar os números cadastrados. <br>"
    +"E) Exibir a soma dos números do vetor. <br>"
    +"F) Sair do sistema. <br>"

    resposta.innerHTML += '<input type="text" id="opcao" placeholder="Digite sua opção aqui"> <br>'
                         +'<button onclick="escolher()">Escolher</button>'
                         +'<div id="resposta2"></div>'
    
}

function escolher() {
    let opcao = document.getElementById('opcao').value;
    console.log(opcao);

    switch (opcao) {
        case "A":
            cadastrar();
            break;
    
        case "a":
            cadastrar();
            break;
    
        case "B":
            buscar();
            break;
    
        case "b":
            buscar();
            break;
    
        case "C":
            excluir();
            break;
    
        case "c":
            excluir();
            break;
    
        case "D":
            listar();
            break;
    
        case "d":
            listar();
            break;
    
        case "E":
            soma();
            break;
    
        case "e":
            soma();
            break;
    
        case "F":
            sair();
            break;
    
        case "f":
            sair();
            break;
    
        default:
            resposta2.innerHTML = "Opção inválida, por favor, selecione uma opção válida";
            break;
    }

}

function cadastrar() {
    resposta.innerHTML = '<br> Por favor, digite um número para adicionarmos a lista'
                         +'<br><input type="text" id="numero" placeholder="Digite o número aqui"> <br><br>'
                         +'<button onclick="inserir()">Cadastrar</button><br>'
                         +'<button onclick="comecar()">Voltar</button>'
                         +'<div id="resposta2"></div>'
}
function inserir() {
    let numero = Number(document.getElementById('numero').value);
    if ((isNaN(numero)) || (numero == 0)) {
        resposta2.innerHTML = 'Valor inválido, por favor, digite um número'
    }else{
    listaDeNumeros.push(numero);
    console.log(listaDeNumeros);
    resposta.innerHTML = '<br> Por favor, digite um número para adicionarmos a lista'
                         +'<br><input type="text" id="numero" placeholder="Digite o número aqui"> <br><br>'
                         +'<button onclick="inserir()">Cadastrar</button><br>'
                         +'<button onclick="comecar()">Voltar</button>'
                         +'<div id="resposta2"></div>'
    }
}
function buscar() {
    resposta.innerHTML = '<br> Por favor, digite um número para procurarmos na lista <br>'
                         +'<input type="text" id="numero" placeholder="Digite o número aqui"> <br>'
                         +'<button onclick="procurar()">Procurar</button><br>'
                         +'<button onclick="comecar()">Voltar</button>'
                         +'<div id="resposta2"></div>'
    
}
function procurar() {
    let indice = 1;
    let achar = 0;
    let numero = Number(document.getElementById('numero').value);
        if ((isNaN(numero)) || (numero == 0)) {
            resposta.innerHTML += '<br> Valor inválido, por favor, digite um número'
        }else{
            for (let i = 0; i < listaDeNumeros.length; i++) {
                if (numero == listaDeNumeros[i]) {
                    achar = 1;
                    numeroDaLista = indice;
                    console.log(listaDeNumeros[i])
                }
                indice ++
            }
            if (achar == 1) {
                resposta2.innerHTML = `O número ${numero} existe nesta lista, e ele ocupa a posição nº ${numeroDaLista}.`;
            }else{
                resposta2.innerHTML = `O número ${numero} não existe nesta lista.`;
            }
        }
}
function excluir() {
    resposta.innerHTML = '<br> Por favor, digite o número para excluirmos na lista'
                         +'<br> <input type="text" id="numero" placeholder="Digite o número aqui"> <br>'
                         +'<button onclick="deletar()">Deletar</button><br>'
                         +'<button onclick="comecar()">Voltar</button>'
                         +'<div id="resposta2"></div>'
                         
}

function deletar() {
    let numero = Number(document.getElementById('numero').value);
    if ((isNaN(numero)) || (numero == 0)) {
        resposta2.innerHTML += '<br> Valor inválido, por favor, digite um número'
    }else{
        for (let i = 0; i < listaDeNumeros.length; i++) {
            if (numero == listaDeNumeros[i]) {
                listaDeNumeros.splice(i, 1)
                console.log(listaDeNumeros);
            }
        }
    }
    
}
function listar() {
    let indice = 1;
    resposta.innerHTML = '--LISTA-DE-NÚMEROS--<br>'
    for (let i = 0; i < listaDeNumeros.length; i++) {
        resposta.innerHTML += `${indice}) ${listaDeNumeros[i]}<br>`
        indice ++;
    } 
    resposta.innerHTML += '<button onclick="comecar()">Voltar</button>'
}
function soma() {
    let somar = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        somar += listaDeNumeros[i] 
    }
    resposta.innerHTML = `Ao somar todos os números da lista, se obtém o valor de ${somar}<br>`
                         +'<button onclick="comecar()">Voltar</button>'
                         
    
}
function sair() {
    alert('Saindo do sistema!');
    resposta.innerHTML = "";
    
}