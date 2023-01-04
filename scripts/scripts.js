var inputQuantia = document.querySelector('#quantia');
var newAccount1 = document.querySelector('.newaccount1')
var newAccount2 = document.querySelector('.newaccount2')
var newAccount3 = document.querySelector('.newaccount3')
var newAccount4 = document.querySelector('.newaccount4')


let conta;
let saldoAposta = {};



function cliqueMetade(){ // Botão de Metade
    inputQuantia.value = inputQuantia.value / 2 ;
}
function cliqueDobro(){ // Botão de Dobro
    inputQuantia.value = inputQuantia.value * 2 ;
}
function btnNovaConta(){ // Botão para fazer a conta e criar uma nova
// faz o teste para ver qual está disponivel e envia para variavel num

    if (newAccount1.style.display !== "none"){
        conta = 1
        finalizar();
        criarConta();
        repGale();
        
        conta = 0

    }else if (newAccount2.style.display !== "none"){
        conta = 2
        finalizar()
        criarConta();
        repGale();
        
        conta = 0

    }else if (newAccount3.style.display !== "none"){
        conta = 3
        finalizar();
        criarConta();
        repGale();
        conta = 0

    }else if (newAccount4.style.display !== "none"){
        conta = 4
        finalizar();
        criarConta();
        repGale();
        conta = 0

    }else {
        alert('limpe um dos campos para adicionar novas contas')
    }
}

function criarConta(){//utiliza a variavel num para mostrar os campos

    let btnClean = document.querySelector(`.btn${conta}`)
    let account = document.querySelector(`.account${conta}`)
    let headerCardTitle = document.querySelector(`.title${conta}`)
    let headerCardMultiple = document.querySelector(`.multiple${conta}`)
    let newAccount = document.querySelector(`.newaccount${conta}`)

    account.style.display = "flex";
    btnClean.style.display = "inline-block";
    headerCardTitle.innerHTML = `Conta ${conta}`;
    headerCardMultiple.innerHTML = "1.5X";
    newAccount.style.display = "none";
}
function repGale(){ // Faz a repetição dos Gales com base na conta

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
    let aposta = document.querySelector(`.aposta-${conta}-gale-${i}`)
    let ganhou = document.querySelector(`.ganhou-${conta}-gale-${i}`)
    let perdeu = document.querySelector(`.perdeu-${conta}-gale-${i}`)
    let branco = document.querySelector(`.branco-${conta}-gale-${i}`)

    let contaAposta = saldoAposta * i; // Quanto tem que apostar
        contaAposta = contaAposta.toFixed(1);

    let contaGanhou = saldoAposta * i * 2;// Se ganhar
        contaGanhou = contaGanhou.toFixed(1);

    let valorBranco = saldoAposta * 14; // Se der branco
        valorBranco = valorBranco.toFixed(1);

    let contaPerdeu = saldoAposta * i; // Se perder
        contaPerdeu = contaPerdeu.toFixed(1);


    aposta.innerHTML = `R$${contaAposta}`
    ganhou.innerHTML = `R$${contaGanhou}`
    branco.innerHTML = `R$${valorBranco}`
    perdeu.innerHTML = `R$${contaPerdeu}`

}





function limparConta(num){ // botão de limpar a conta

    function buscaLimparConta(){// função para limpar a conta
        btnClean.style.display = 'none'
        account.style.display = 'none'
        headerCardTitle.innerHTML = " ";
        headerCardMultiple.innerHTML = " ";
        newAccount.style.display = "flex";
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




// Teste Conta Double

let sel = document.querySelector('#select')
let res = document.querySelector('#resultado')

var adicionadoPreto = [];
var adicionadoBranco = [];
var adicionadoVermelho = [];


function adicionarPreto(){

    if (inputQuantia.value == 0 ){
        alert('Valor Invalido')
    }else{
        adicionadoPreto.push(Number(inputQuantia.value))

        var option = document.createElement('option')
        option.text=`Adicionado R$${inputQuantia.value} ao \u{26AB}.`
        sel.appendChild(option)
        res.innerHTML = ' '
    }
}
function adicionarBranco(){

    if (inputQuantia.value == 0 ){
        alert('Valor Invalido')
    }else{
        adicionadoBranco.push(Number(inputQuantia.value))

        var option = document.createElement('option')
        option.text=`Adicionado R$${inputQuantia.value} ao \u{26AA}.`
        sel.appendChild(option)
        res.innerHTML = ' '
    }
}
function adicionarVermelho(){

    if (inputQuantia.value == 0 ){
        alert('Valor Invalido')
    }else{
        adicionadoVermelho.push(Number(inputQuantia.value))

        var option = document.createElement('option')
        option.text=`Adicionado R$${inputQuantia.value} ao \u{1F534}.`
        sel.appendChild(option)
        res.innerHTML = ' '
    } 
}


function finalizar(){

    if(adicionadoPreto.length==0 && adicionadoBranco.length==0 && adicionadoVermelho.length==0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let somaPreto = Number(0);
        let somaBranco = Number(0);
        let somaVermelho = Number(0);

        for ( let pos in adicionadoPreto){
            somaPreto += adicionadoPreto[pos]
        }
        for ( let pos in adicionadoBranco){
            somaBranco += adicionadoBranco[pos]
        }
        for ( let pos in adicionadoVermelho){
            somaVermelho += adicionadoVermelho[pos]
        }

        saldoAposta = somaVermelho+somaBranco+somaPreto;
    }
}
