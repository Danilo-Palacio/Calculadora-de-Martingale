let inputQuantia = document.querySelector('#quantia');
let containerMenu = document.querySelector('#container-menu');
let newAccount1 = document.querySelector('.newaccount1')
let newAccount2 = document.querySelector('.newaccount2')
let newAccount3 = document.querySelector('.newaccount3')
let newAccount4 = document.querySelector('.newaccount4')
let sel = document.querySelector('#select')
let input_autoRetirar = document.querySelector('#auto-retirar')
let emojiDasPedras = []
let contaDisponivel;
let somaTotal = 0;


// Seção de botões utiizado em ambos os jogos
function cliqueMetade(){ // Botão de Metade
    inputQuantia.value = inputQuantia.value / 2 ;
}
function cliqueDobro(){ // Botão de Dobro
    inputQuantia.value = inputQuantia.value * 2 ;
}
function ativacao_btnCalcular(){
    if (colors.adicionadoBranco.length != 0 || colors.adicionadoPreto.length != 0 || colors.adicionadoVermelho.length != 0 ){
        alert("escolheu uma cor")
    }else {alert('Escolha uma cor')}
} 

// sessão de objetos para ambos os jogos! !!!!!!!!
let testeParaCriarConta = {// Objeto de funções para testes 
    contaDouble(){
        if (newAccount1.style.display !== "none"){
            contaDisponivel = 1
    
            criarConta.criarContaDouble();
            repeticao.repeticaoDeGaleDouble();
            
            contaDisponivel = 0
    
        }else if (newAccount2.style.display !== "none"){
            contaDisponivel = 2
            criarConta.criarContaDouble();
            repeticao.repeticaoDeGaleDouble();
            
            contaDisponivel = 0
    
        }else if (newAccount3.style.display !== "none"){
            contaDisponivel = 3
            criarConta.criarContaDouble();
            repeticao.repeticaoDeGaleDouble();
    
            contaDisponivel = 0
    
        }else if (newAccount4.style.display !== "none"){
            contaDisponivel = 4
            criarConta.criarContaDouble();
            repeticao.repeticaoDeGaleDouble();
            contaDisponivel = 0
    
        }else {
            alert('limpe um dos campos para adicionar novas contas')
        }
    },
    contaCrash(){
        if (newAccount1.style.display !== "none"){
            contaDisponivel = 1
            
            criarConta.criarContaCrash();
            repeticao.repeticaoDeGaleCrash();
            
            contaDisponivel = 0
    
        }else if (newAccount2.style.display !== "none"){
            contaDisponivel = 2
            criarConta.criarContaCrash();
            repeticao.repeticaoDeGaleCrash();
            
            contaDisponivel = 0
    
        }else if (newAccount3.style.display !== "none"){
            contaDisponivel = 3
            criarConta.criarContaCrash();
            repeticao.repeticaoDeGaleCrash();
    
            contaDisponivel = 0
    
        }else if (newAccount4.style.display !== "none"){
            contaDisponivel = 4
            criarConta.criarContaCrash();
            repeticao.repeticaoDeGaleCrash();
            contaDisponivel = 0
    
        }else {
            alert('limpe um dos campos para adicionar novas contas')
        }
    } ,
}
let criarConta = {
    criarContaDouble(){//utiliza a variavel contaDisponivel para mostrar os campos

        let btnClean = document.querySelector(`.btn${contaDisponivel}`)
        let account = document.querySelector(`.account${contaDisponivel}`)
        let headerCardTitle = document.querySelector(`.title${contaDisponivel}`)
        let headerCardMultiple = document.querySelector(`.multiple${contaDisponivel}`)
        let newAccount = document.querySelector(`.newaccount${contaDisponivel}`)
    
        account.style.display = "flex";
        btnClean.style.display = "inline-block";
        headerCardTitle.innerHTML = `Conta ${contaDisponivel}`;
        headerCardMultiple.innerHTML = `${emojiDasPedras}`;
        headerCardMultiple.style.backgroundColor = "hsla(0, 0%, 100%, 0.5)"
        newAccount.style.display = "none";
    },
    criarContaCrash(){//utiliza a variavel contaDisponivel para mostrar os campos

        let btnClean = document.querySelector(`.btn${contaDisponivel}`)
        let account = document.querySelector(`.account${contaDisponivel}`)
        let headerCardTitle = document.querySelector(`.title${contaDisponivel}`)
        let headerCardMultiple = document.querySelector(`.multiple${contaDisponivel}`)
        let newAccount = document.querySelector(`.newaccount${contaDisponivel}`)
    
        account.style.display = "flex";
        btnClean.style.display = "inline-block";
        headerCardTitle.innerHTML = `Conta ${contaDisponivel}`;
        headerCardMultiple.innerHTML = `${input_autoRetirar.value}X`;
        newAccount.style.display = "none";
    },
}
let repeticao = {
        repeticaoDeGaleDouble(){ // Faz a repetição nos Gales e ativa a função calculoDeGale, utiliza os dados da contaDisponivel

            for (let i = 1; i <=3 ; i++) {
        
                if (i == 1){
                    calculoDeGale.somaGaleDouble(1)
                }else if (i == 2){
                    calculoDeGale.somaGaleDouble(2)
                }else {
                    calculoDeGale.somaGaleDouble(3)
                }
            }
        },  
        repeticaoDeGaleCrash(){ // Faz a repetição nos Gales e ativa a função calculoDeGale, utiliza os dados da contaDisponivel

            for (let i = 1; i <=3 ; i++) {
        
                if (i == 1){
                    calculoDeGale.somaGaleCrash(1)
                }else if (i == 2){
                    calculoDeGale.somaGaleCrash(2)
                }else {
                    calculoDeGale.somaGaleCrash(3)
                }
            }
        }
}
let calculoDeGale = {

    somaGaleDouble(i){ // Faz o calculo dos Martingales
        let aposta = document.querySelector(`.aposta-${contaDisponivel}-gale-${i}`)
        let ganhou = document.querySelector(`.ganhou-${contaDisponivel}-gale-${i}`)
        let perdeu = document.querySelector(`.perdeu-${contaDisponivel}-gale-${i}`)
        let branco = document.querySelector(`.branco-${contaDisponivel}-gale-${i}`)
    
        let contaAposta = somaTotal * i; // Quanto apostou
            contaAposta = contaAposta.toFixed(1);
    
        let contaGanhou = ((somaTotal - saldosDoCalculo.somaBranco ) * i * 2)- somaTotal;// Se der a cor
            contaGanhou = contaGanhou.toFixed(1);
    
        let valorBranco = 0;

        if(saldosDoCalculo.somaBranco > 0){
                valorBranco = (saldosDoCalculo.somaBranco * 14) - contaAposta; // Se der branco
                valorBranco = valorBranco.toFixed(1);
            }else{
                valorBranco = 0
            }
        let contaPerdeu = somaTotal * i; // Se perder
            contaPerdeu = contaPerdeu.toFixed(1);
    
    
        aposta.innerHTML = `R$${contaAposta}`
        ganhou.innerHTML = `R$${contaGanhou}`
        branco.innerHTML = `R$${valorBranco}`
        perdeu.innerHTML = `R$${contaPerdeu}`
    },
    somaGaleCrash(i){ // Faz o calculo dos Martingales
         let aposta = document.querySelector(`.aposta-${contaDisponivel}-gale-${i}`)
         let ganhou = document.querySelector(`.ganhou-${contaDisponivel}-gale-${i}`)
         let perdeu = document.querySelector(`.perdeu-${contaDisponivel}-gale-${i}`)
    
         let contaAposta = inputQuantia.value * i; // Quanto apostou
             contaAposta = contaAposta.toFixed(1);
    
         let contaGanhou = inputQuantia.value* i * input_autoRetirar.value;// Se ganhar
             contaGanhou = contaGanhou.toFixed(1);
    
    
         let contaPerdeu = inputQuantia.value * i; // Se perder
             contaPerdeu = contaPerdeu.toFixed(1);
    
    
         aposta.innerHTML = `R$${contaAposta}`
         ganhou.innerHTML = `R$${contaGanhou}`
         perdeu.innerHTML = `R$${contaPerdeu}`
     }

}
let mostrarPedras = {

    adicionarPreto(){

        if (inputQuantia.value == 0 ){
            alert('Valor Invalido')
        }else{
            colors.adicionadoPreto.push(Number(inputQuantia.value))
    
            var option = document.createElement('option')
            option.text=`Adicionado R$${inputQuantia.value} ao \u{26AB}.`
            sel.appendChild(option)
    
            emojiDasPedras += `\u{26AB}`
        }
    },
    adicionarBranco(){
    
        if (inputQuantia.value == 0 ){
            alert('Valor Invalido')
        }else{
            colors.adicionadoBranco.push(Number(inputQuantia.value))
    
            var option = document.createElement('option')
            option.text=`Adicionado R$${inputQuantia.value} ao \u{26AA}.`
            sel.appendChild(option)
    
            emojiDasPedras += `\u{26AA}`
        }
    },
    adicionarVermelho(){
    
        if (inputQuantia.value == 0 ){
            alert('Valor Invalido')
        }else{
            colors.adicionadoVermelho.push(Number(inputQuantia.value))
    
            var option = document.createElement('option')
            option.text=`Adicionado R$${inputQuantia.value} ao \u{1F534}.`
            sel.appendChild(option)
    
            emojiDasPedras += `\u{1F534}`
        } 
    }

}
// Fim da sessão de objetos!!!!!


// Sessão Double! 

let saldosDoCalculo = {
    somaPreto :Number(0),
    somaVermelho: Number(0),
    somaBranco: Number(0),
}
let colors = {
    adicionadoPreto: [],
    adicionadoBranco: [],
    adicionadoVermelho: [],
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
    emojiDasPedras = ''
}
function limparConta(num){ // botão de limpar a conta

    function buscaLimparConta(){// função para limpar a conta
        btnClean.style.display = 'none'
        account.style.display = 'none'
        headerCardMultiple.innerHTML = " ";
        newAccount.style.display = "flex";
        headerCardMultiple.style.backgroundColor = "#1A242D"
    }
    let btnClean = document.querySelector(`.btn${num}`)
    let account = document.querySelector(`.account${num}`)
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
function btn_calcular(){// TESTE DE COR || SOMENTE DOUBLE!

    if(colors.adicionadoPreto.length > 0 && colors.adicionadoVermelho.length > 0){
        alert('Não é possivel adicionar uma Preta e uma Vermelha')
        limparPedras();

        
        
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

        testeParaCriarConta.contaDouble()
        limparPedras()

        

        saldosDoCalculo.somaBranco = 0
        saldosDoCalculo.somaPreto = 0
        saldosDoCalculo.somaVermelho = 0
    }
}

// Sessão Crash

var resultadoContaCrash= 0;

function CalcularCrash(){
    resultadoContaCrash = inputQuantia.value * input_autoRetirar.value 
    testeParaCriarConta.contaCrash();
    emojiDasPedras = input_autoRetirar.value
    cleanAutoRetirar();
}
function cleanAutoRetirar(){
    input_autoRetirar.value = "";
}

let id = null;
//Alerta clique em Calcular

function cliqueEmCalcular(){  
    containerMenu.style.transition = '0.9s';
    containerMenu.style.outline = '3px solid var(--green-50)'
    setTimeout(function(){
        containerMenu.style.transition = '0.9s';
        containerMenu.style.outline = '0'
    },500);
}






//Tutorial
window.addEventListener("load", function(event) {
    if(window.innerWidth >= 768){
        //Desktop
        seletoresTutorial.resolucaoTela = "desktop"
        funcoesTutorial.btnSkipModal()
   
    } else{
    //mobile
        seletoresTutorial.resolucaoTela = "mobile"
        funcoesTutorial.btnSkipModal()
    }
});
let seletoresTutorial = {
    modal: document.querySelector('#modal'),
    photoModal : document.querySelector('#passo'),
    btnSkipModal: document.querySelector('.btn-skip'),
    contador : 1,
    resolucaoTela:(""),
}
let funcoesTutorial = {
        btnSkipModal(){
            if (seletoresTutorial.contador <= 2){

                seletoresTutorial.modal.style.display ="inline-block";

                seletoresTutorial.photoModal.setAttribute('src',`imagens/tutoriais/passo${seletoresTutorial.contador}_${seletoresTutorial.resolucaoTela}.svg`)
                
                seletoresTutorial.contador ++;            
                
            }else if (seletoresTutorial.contador =3) {
                
                seletoresTutorial.btnSkipModal.style.display = "none";
                seletoresTutorial.modal.style.display ="inline-block";

                seletoresTutorial.photoModal.setAttribute('src',`imagens/tutoriais/passo${seletoresTutorial.contador}_${seletoresTutorial.resolucaoTela}.svg`)
                
                seletoresTutorial.contador ++;          
            }
        },
        btnCloseModal(){
            seletoresTutorial.modal.style.display = "none";
        }
    
}
