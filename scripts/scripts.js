let inputQuantia = document.querySelector('#quantia');
let newAccount1 = document.querySelector('.newaccount1')
let newAccount2 = document.querySelector('.newaccount2')
let newAccount3 = document.querySelector('.newaccount3')
let newAccount4 = document.querySelector('.newaccount4')
let sel = document.querySelector('#select')

let autoRetirar = document.querySelector('#autoRetirar')

function cleanAutoRetirar(){
    autoRetirar.value = "0";
}

let emoji = []
let contaDisponivel;

let somaTotal = 0;

var saldosDoCalculo = {
    somaPreto :Number(0),
    somaVermelho: Number(0),
    somaBranco: Number(0),
}

let colors = {
    adicionadoPreto: [],
    adicionadoBranco: [],
    adicionadoVermelho: [],
}



// Seção de botões 
function cliqueMetade(){ // Botão de Metade
    inputQuantia.value = inputQuantia.value / 2 ;
}
function cliqueDobro(){ // Botão de Dobro
    inputQuantia.value = inputQuantia.value * 2 ;
}


// faz o teste para ver qual campo de conta está disponivel
//Retorna a conta que está disponivel para variavel contaDisponivel, esse dado é utilizado na função criarConta e repGale, e após utilizar o dado ele é apagado.
function btnNovaConta(){ 


    if (newAccount1.style.display !== "none"){
        contaDisponivel = 1
        criarConta();
        repGale();
        
        contaDisponivel = 0

    }else if (newAccount2.style.display !== "none"){
        contaDisponivel = 2
        criarConta();
        repGale();
        
        contaDisponivel = 0

    }else if (newAccount3.style.display !== "none"){
        contaDisponivel = 3
        criarConta();
        repGale();
        contaDisponivel = 0

    }else if (newAccount4.style.display !== "none"){
        contaDisponivel = 4
        criarConta();
        repGale();
        contaDisponivel = 0

    }else {
        alert('limpe um dos campos para adicionar novas contas')
    }
}
function calcular(){// Botão Calcular

    if(colors.adicionadoPreto.length > 0 && colors.adicionadoVermelho.length > 0){
        alert('Não é possivel adicionar uma Preta e uma Vermelha')

        
        
    }else if(colors.adicionadoPreto.length == 0 && colors.adicionadoVermelho.length == 0 && colors.adicionadoBranco.length == 0){
        alert("Escolha uma Cor")

    }else{

        for ( let pos in colors.adicionadoPreto){
            saldosDoCalculo.somaPreto += colors.adicionadoPreto[pos]
            }
            for ( let pos in colors.adicionadoBranco){
                saldosDoCalculo.somaBranco += colors.adicionadoBranco[pos]
            }
            for ( let pos in colors.adicionadoVermelho){
                saldosDoCalculo.somaVermelho += colors.adicionadoVermelho[pos]
            }

            somaTotal = saldosDoCalculo.somaBranco + saldosDoCalculo.somaPreto + saldosDoCalculo.somaVermelho

            btnNovaConta()
            limparPedras()

            

            saldosDoCalculo.somaBranco = 0
            saldosDoCalculo.somaPreto = 0
            saldosDoCalculo.somaVermelho = 0
    }
}


function criarConta(){//utiliza a variavel num para mostrar os campos

    let btnClean = document.querySelector(`.btn${contaDisponivel}`)
    let account = document.querySelector(`.account${contaDisponivel}`)
    let headerCardTitle = document.querySelector(`.title${contaDisponivel}`)
    let headerCardMultiple = document.querySelector(`.multiple${contaDisponivel}`)
    let newAccount = document.querySelector(`.newaccount${contaDisponivel}`)

    account.style.display = "flex";
    btnClean.style.display = "inline-block";
    headerCardTitle.innerHTML = `Conta ${contaDisponivel}`;
    headerCardMultiple.innerHTML = `${emoji}`;
    headerCardMultiple.style.backgroundColor = "hsla(0, 0%, 100%, 0.5)"
    newAccount.style.display = "none";
}
function repGale(){ // Faz a repetição nos Gales e ativa a função somaGale, utiliza os dados da contaDisponivel

    for (let i = 1; i <=3 ; i++) {

        if (i == 1){
            somaGale(1)
        }else if (i == 2){
            somaGale(2)
        }else {
            somaGale(3)
        }
    }
}

function somaGale(i){ // Faz o calculo dos Martingales
    let aposta = document.querySelector(`.aposta-${contaDisponivel}-gale-${i}`)
    let ganhou = document.querySelector(`.ganhou-${contaDisponivel}-gale-${i}`)
    let perdeu = document.querySelector(`.perdeu-${contaDisponivel}-gale-${i}`)
    let branco = document.querySelector(`.branco-${contaDisponivel}-gale-${i}`)

    let contaAposta = somaTotal * i; // Quanto apostou
        contaAposta = contaAposta.toFixed(1);

    let contaGanhou = (somaTotal - saldosDoCalculo.somaBranco ) * i * 2;// Se der a cor
        contaGanhou = contaGanhou.toFixed(1);

    let valorBranco = saldosDoCalculo.somaBranco * 14; // Se der branco
        valorBranco = valorBranco.toFixed(1);

    let contaPerdeu = somaTotal * i; // Se perder
        contaPerdeu = contaPerdeu.toFixed(1);


    aposta.innerHTML = `R$${contaAposta}`
    ganhou.innerHTML = `R$${contaGanhou}`
    branco.innerHTML = `R$${valorBranco}`
    perdeu.innerHTML = `R$${contaPerdeu}`

}


// adicionar as pedras
function adicionarPreto(){

    if (inputQuantia.value == 0 ){
        alert('Valor Invalido')
    }else{
        colors.adicionadoPreto.push(Number(inputQuantia.value))

        var option = document.createElement('option')
        option.text=`Adicionado R$${inputQuantia.value} ao \u{26AB}.`
        sel.appendChild(option)

        emoji += `\u{26AB}`
    }
}
function adicionarBranco(){

    if (inputQuantia.value == 0 ){
        alert('Valor Invalido')
    }else{
        colors.adicionadoBranco.push(Number(inputQuantia.value))

        var option = document.createElement('option')
        option.text=`Adicionado R$${inputQuantia.value} ao \u{26AA}.`
        sel.appendChild(option)

        emoji += `\u{26AA}`
    }
}
function adicionarVermelho(){

    if (inputQuantia.value == 0 ){
        alert('Valor Invalido')
    }else{
        colors.adicionadoVermelho.push(Number(inputQuantia.value))

        var option = document.createElement('option')
        option.text=`Adicionado R$${inputQuantia.value} ao \u{1F534}.`
        sel.appendChild(option)

        emoji += `\u{1F534}`
    } 
}


function limparPedras(){// botão limpar pedras

    colors.adicionadoBranco = 0
    colors.adicionadoPreto = 0
    colors.adicionadoVermelho = 0

    sel.innerHTML = ' '

    colors.adicionadoBranco = []
    colors.adicionadoPreto = []
    colors.adicionadoVermelho = []

    inputQuantia.value = 1.1;
    emoji = ''
}
function limparConta(num){ // botão de limpar a conta

    function buscaLimparConta(){// função para limpar a conta
        btnClean.style.display = 'none'
        account.style.display = 'none'
        headerCardTitle.innerHTML = " ";
        headerCardMultiple.innerHTML = " ";
        newAccount.style.display = "flex";
        headerCardMultiple.style.backgroundColor = "#1A242D"
    }
    let btnClean = document.querySelector(`.btn${num}`)
    let account = document.querySelector(`.account${num}`)
    let headerCardTitle = document.querySelector(`.title${num}`)
    let headerCardMultiple = document.querySelector(`.multiple${num}`)
    let newAccount = document.querySelector(`.newaccount${num}`)

    if (num == 1 ){ // Faz o teste e limpa a conta certa
        buscaLimparConta()
    }else if (num == 2){
        buscaLimparConta()
    }else if (num == 3){
        buscaLimparConta()
    }else if (num == 4){
        buscaLimparConta()
    }
}

