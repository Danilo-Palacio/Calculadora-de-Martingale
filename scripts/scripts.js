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

//Modal

let modal = {
    fade1 : document.querySelector('.fadeum'),
    fade2 : document.querySelector('.fadedois'),
    fade3 : document.querySelector('.fadetres'),
    photo1 : document.querySelector('.photoum'),
    photo2 : document.querySelector('.photodois'),
    photo3 : document.querySelector('.phototres'),
    photo4 : document.querySelector('.photoquatro'),
    photo5 : document.querySelector('.photocinco'),
    photo6 : document.querySelector('.photoseis'),
    photo7 : document.querySelector('.photosete'),
    photo8 : document.querySelector('.photooito'),
}



let modalTutoriais = {
    Desktop : {
        tutorial1(){            
            modal.fade1.style.display = "inline-block";
            modal.fade1.style.clipPath = "polygon(0% 0%,0% 100%,10% 100%,10% 4%,39% 4%,39% 57%,10% 58%, 10% 100%, 100% 100%,100% 0%)";
            modal.fade1.style.transition = '0.5s';
    
            modal.photo1.style.display = 'block';
            modal.photo2.style.display = 'block';
            modal.photo3.style.display = 'block';
            modal.photo1.style.transition = '0.5s';
            modal.photo2.style.transition = '0.5s';
            modal.photo3.style.transition = '0.5s';
        },
        limparTutorial1(){
            modal.fade1.style.display = "none";
        
            modal.photo1.style.display = 'none';
            modal.photo2.style.display = 'none';
            modal.photo3.style.display = 'none';
    
            modalTutoriais.Desktop.tutorial2()
        },
        tutorial2(){
    
            modal.fade2.style.display = "inline-block";
            modal.fade2.style.clipPath = "polygon(0% 0%, 0% 100%,43% 100%,43% 1%,  67% 1%,67% 50%,10% 50%,10% 100%,100% 100%, 100% 0%)";
            modal.fade2.style.transition = '0.5s';
        
            modal.photo4.style.display = 'block';
            modal.photo5.style.display = 'block';
            modal.photo6.style.display = 'block';
            modal.photo7.style.display = 'block';
            modal.photo4.style.transition = '0.5s';
            modal.photo5.style.transition = '0.5s';
            modal.photo6.style.transition = '0.5s';
            modal.photo7.style.transition = '0.5s';
        },
        limparTutorial2(){
            modal.fade2.style.display = "none";
    
            modal.photo4.style.display = 'none';
            modal.photo5.style.display = 'none';
            modal.photo6.style.display = 'none';
            modal.photo7.style.display = 'none';
    
            modalTutoriais.Desktop.tutorial3()
        },
        tutorial3(){
            modal.fade3.style.display = "inline-block";
            modal.fade3.style.clipPath = "polygon(0% 0%, 0% 100%,43% 100%,43% 1%,  67% 1%,67% 50%,10% 50%,10% 100%,100% 100%, 100% 0%)";
            modal.fade3.style.transition = '0.5s';
      
            modal.photo8.style.display = 'block';
            modal.photo8.style.transition = '0.5s';    
        
        },
        limparTutorial3(){
            modal.photo8.style.display = "none";
            modal.fade3.style.display = "none";
        },
    },
    Mobile : {
        tutorial1(){

            modal.fade1.style.display = "inline-block";
            modal.fade1.style.clipPath = "polygon(0% 0%,0% 100%,10% 100%,10% 4%,90% 4%,90% 45%,10% 45%, 10% 100%, 100% 100%,100% 0%)";
            modal.fade1.style.transition = '0.5s';
    
            modal.photo1.style.display = 'block';
            modal.photo2.style.display = 'block';
            modal.photo3.style.display = 'block';
            modal.photo1.style.top = "9%"
            modal.photo1.style.left = "3%"
            modal.photo2.style.top = "40%"
            modal.photo2.style.left = "34%"
            modal.photo3.style.top = "24%"
            modal.photo3.style.left = "63%"
            
            modal.photo1.style.transition = '0.5s';
            modal.photo2.style.transition = '0.5s';
            modal.photo3.style.transition = '0.5s';
        },
        limparTutorial1(){
            modal.fade1.style.display = "none";
        
            modal.photo1.style.display = 'none';
            modal.photo2.style.display = 'none';
            modal.photo3.style.display = 'none';
    
            modalTutoriais.Mobile.tutorial2()
        },
        tutorial2(){
    
            modal.fade2.style.display = "inline-block";
            modal.fade2.style.clipPath = "polygon(0% 0%,0% 100%,10% 100%,10% 42%,90% 42%,90% 100%,10% 100%, 10% 100%, 100% 100%,100% 0%)";
            modal.fade2.style.transition = '0.5s';
        
            modal.photo4.style.display = 'block';
            modal.photo5.style.display = 'block';
            modal.photo6.style.display = 'block';
            modal.photo7.style.display = 'block';

            modal.photo4.style.top = "9%"
            modal.photo4.style.left = "0%"
            modal.photo5.style.top = "25%"
            modal.photo5.style.left = "15%"
            modal.photo6.style.top = "26%"
            modal.photo6.style.left = "35%"
            modal.photo7.style.top = "35%"
            modal.photo7.style.left = "35%"

            modal.photo4.style.transition = '0.5s';
            modal.photo5.style.transition = '0.5s';
            modal.photo6.style.transition = '0.5s';
            modal.photo7.style.transition = '0.5s';
        },
        limparTutorial2(){
            modal.fade2.style.display = "none";
    
            modal.photo4.style.display = 'none';
            modal.photo5.style.display = 'none';
            modal.photo6.style.display = 'none';
            modal.photo7.style.display = 'none';
    
            modalTutoriais.Mobile.tutorial3()
        },
        tutorial3(){
            modal.fade3.style.display = "inline-block";
            modal.fade3.style.clipPath = "polygon(0% 0%,0% 100%,10% 100%,10% 42%,90% 42%,90% 100%,10% 100%, 10% 100%, 100% 100%,100% 0%)";
            modal.fade3.style.transition = '0.5s';
      
            modal.photo8.style.top = "20%"
            modal.photo8.style.left = "39%"
            modal.photo8.style.width = "44%"
            modal.photo8.style.display = 'block';
            modal.photo8.style.transition = '0.5s';    
        
        },
        limparTutorial3(){
            modal.photo8.style.display = "none";
            modal.fade3.style.display = "none";
            limparPedras();
            limparConta(1);
        },
    }
}




window.addEventListener("load", function(event) {
    if(window.innerWidth >= 768){
        adicionadoPreto();
        btn_calcular();
        modalTutoriais.Desktop.tutorial1();
        modal.photo1.setAttribute('src','imagens/tutoriais/passo1desktop.svg');
        modal.photo2.setAttribute('src','imagens/tutoriais/passo2desktop.svg');
        modal.photo3.setAttribute('src','imagens/tutoriais/passo3desktop.svg');
        modal.photo4.setAttribute('src','imagens/tutoriais/passo4desktop.svg');
        modal.photo5.setAttribute('src','imagens/tutoriais/passo5desktop.svg');
        modal.photo6.setAttribute('src','imagens/tutoriais/passo6desktop.svg');
        modal.photo7.setAttribute('src','imagens/tutoriais/passo7desktop.svg');
        modal.photo8.setAttribute('src','imagens/tutoriais/passo8desktop.svg');

        modal.fade1.setAttribute('onclick','modalTutoriais.Desktop.limparTutorial1()');
        modal.fade2.setAttribute('onclick','modalTutoriais.Desktop.limparTutorial2()');
        modal.fade3.setAttribute('onclick','modalTutoriais.Desktop.limparTutorial3()');
    } else{
        mostrarPedras.adicionarVermelho();
        mostrarPedras.adicionarBranco();
        btn_calcular();
        modalTutoriais.Mobile.tutorial1();  
        modal.photo1.setAttribute('src','imagens/tutoriais/passo1mobile.svg');
        modal.photo2.setAttribute('src','imagens/tutoriais/passo2mobile.svg');
        modal.photo3.setAttribute('src','imagens/tutoriais/passo3mobile.svg');
        modal.photo4.setAttribute('src','imagens/tutoriais/passo4mobile.svg');
        modal.photo5.setAttribute('src','imagens/tutoriais/passo5mobile.svg');
        modal.photo6.setAttribute('src','imagens/tutoriais/passo6mobile.svg');
        modal.photo7.setAttribute('src','imagens/tutoriais/passo7mobile.svg');
        modal.photo8.setAttribute('src','imagens/tutoriais/passo8mobile.svg'); 

        modal.fade1.setAttribute('onclick','modalTutoriais.Mobile.limparTutorial1()');
        modal.fade2.setAttribute('onclick','modalTutoriais.Mobile.limparTutorial2()');
        modal.fade3.setAttribute('onclick','modalTutoriais.Mobile.limparTutorial3()');

        mostrarPedras.adicionarVermelho();
        mostrarPedras.adicionarBranco();

    }
});