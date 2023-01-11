let inputValue = document.querySelector('#quantia');
let containerMenu = document.querySelector('#container-menu');
let newAccount1 = document.querySelector('.newaccount1')
let newAccount2 = document.querySelector('.newaccount2')
let newAccount3 = document.querySelector('.newaccount3')
let newAccount4 = document.querySelector('.newaccount4')
let select = document.querySelector('#select')
let input_autoRetirar = document.querySelector('#auto-retirar')



function cliqueMetade(){ // Botão de Metade
    inputValue.value = inputValue.value / 2 ;
}
function cliqueDobro(){ // Botão de Dobro
    inputValue.value = inputValue.value * 2 ;
}


// Pedras escolhidas

/* let pedra = {
        Vermelha : {
            emoji:`\u{1F534}`,
            quantidade:[],
            adicionarVermelho(){
                if (inputValue.value == 0 ){
                    alert('Valor Invalido')
                }else{
                    pedra.Vermelha.quantidade.push(Number(inputValue.value))
            
                    var option = document.createElement('option')
                    option.text=`Adicionado R$${inputValue.value} ao ${pedra.Vermelha.emoji}.`
                    select.appendChild(option)
        
                    btn_calculate.status.enable()  
            
                    pedra.emojiDasPedras += 1+`${pedra.Vermelha.emoji}`
                } 
            }
        },
        Branca : {
            emoji:`\u{26AA}`,
            quantidade:[],
            adicionarBranco(){
                if (inputValue.value == 0 ){
                    alert('Valor Invalido')
                }else{
                    pedra.Branca.quantidade.push(Number(inputValue.value))
            
                    var option = document.createElement('option')
                    option.text=`Adicionado R$${inputValue.value} ao ${pedra.Branca.emoji}.`
                    select.appendChild(option)
        
                    btn_calculate.status.enable()  
            
                    pedra.emojiDasPedras += `${pedra.Branca.emoji}`
                }
            },
        },
        Preta : {
            emoji:`\u{26AB}`,
            quantidade:[],
            adicionarPreto(){

                if (inputValue.value == 0 ){
                    alert('Valor Invalido')
                }else{
                    pedra.Preta.quantidade.push(Number(inputValue.value))
            
                    var option = document.createElement('option')
                    option.text=`Adicionado R$${inputValue.value} ao ${pedra.Preta.emoji}.`
                    select.appendChild(option)
        
                    btn_calculate.status.enable()          
            
                    pedra.Preta.quantidade += 1;
                }
            }
        },
        emojiDasPedras : []
    };
    */
    
let stone ={
        red:{
            amount:[],
            color:'red',
            multiple: 2,
            emoji:`\u{1F534}`,
            total:null,
        },
        white:{
            amount:[],
            color: 'white',
            multiple: 14,
            emoji:`\u{26AA}`,            
            total:null,
        },
        black:{
            amount:[],
            color: 'black',
            multiple: 2,
            emoji:`\u{26AB}`,
            total:null,
    
        },
}
function insert(color){
    if( color === 'red' ){

        if(inputValue.value <= 0){
            alert('Valor Invalido')
        }else{
            stone.red.amount.push(Number(inputValue.value));

            var option = document.createElement('option')
            option.text=`Adicionado R$${inputValue.value} ao ${stone.red.emoji}.`
            select.appendChild(option)

            btn_calculate.status.enable()

            
        }

    }else if ( color === 'white' ){

        if(inputValue.value <= 0){
            alert('Valor Invalido')
        }else{
            stone.white.amount.push(Number(inputValue.value));

            var option = document.createElement('option')
            option.text=`Adicionado R$${inputValue.value} ao ${stone.white.emoji}.`
            select.appendChild(option)

            btn_calculate.status.enable()

        }

    } else if( color === 'black' ){

        if(inputValue.value <= 0){
            alert('Valor Invalido')
        }else{
            stone.black.amount.push(Number(inputValue.value));

            var option = document.createElement('option')
            option.text=`Adicionado R$${inputValue.value} ao ${stone.black.emoji}.`
            select.appendChild(option)

            btn_calculate.status.enable()

            
        }
    }
}

let btn_calculate = {

    selectorcalculate: document.querySelector('#new_count'),    
    selectorClean: document.querySelector('.new_count'),

    status : {
        enable(){
            btn_calculate.selectorcalculate.style.opacity = '1'
            btn_calculate.selectorcalculate.style.color = 'var(--white)'
            btn_calculate.selectorcalculate.style.cursor = 'pointer'

            btn_calculate.selectorClean.style.opacity = '1' 
            btn_calculate.selectorClean.style.color = 'var(--white)'
            btn_calculate.selectorClean.style.cursor = 'pointer'
        } ,
        disable(){
            btn_calculate.selectorcalculate.style.opacity = ' 0.3'; 
            btn_calculate.selectorcalculate.style.color = 'var(--red)'; 
            btn_calculate.selectorcalculate.style.cursor = 'default'
            

            btn_calculate.selectorClean.style.opacity = ' 0.3';
            btn_calculate.selectorClean.style.color = 'var(--red)';
            btn_calculate.selectorClean.style.cursor = 'default' 
        },
    },
    calcularDouble(){// TESTE DE COR || SOMENTE DOUBLE!
        
        if(stone.red.amount.length > 0 && stone.black.amount.length > 0){
            
            
            alert('Não é possivel adicionar uma Preta e uma Vermelha')
            limparStone();
            
        }  
        else if(stone.black.amount.length == 0 && stone.white.amount.length == 0 && stone.red.amount.length == 0){
          
            alert("Escolha uma Cor")
    
        }
        else{              
            for ( let pos in stone.red.amount){
                stone.red.total += Number(stone.red.amount[pos])
            }
            
            for ( let pos in stone.white.amount){
                stone.white.total += Number(stone.white.amount[pos])
            }
            
            for ( let pos in stone.black.amount){
                stone.black.total += Number(stone.black.amount[pos])
            }

            if (stone.white.total > 0){

                resultado = confirm(`
                OK - Para fazer gale com o valor do Branco
                Cancelar - manter o valor da primeira jogada
                `)//Fazer modal explicando que é arriscado
                
                if (resultado === true){
                    limparStone(); // Limpa as pedras
                    btn_calculate.status.disable(); // Desalibita o botão novamente
                    spaceForNewAccount.contaDouble(true); // Faz o teste da conta
                }else if(resultado === false){
                    limparStone(); // Limpa as pedras
                    btn_calculate.status.disable(); // Desalibita o botão novamente
                    spaceForNewAccount.contaDouble(false); // Faz o teste da conta
                }

                
            }else{
                limparStone(); // Limpa as pedras
                btn_calculate.status.disable(); // Desalibita o botão novamente
                spaceForNewAccount.contaDouble(true); // Faz o teste da conta
            }
            
        };
        
        stone.red.total = null;
        stone.white.total = null;
        stone.black.total = null;

        
    },
    CalcularCrash(){
        resultadoContaCrash = inputValue.value * input_autoRetirar.value 
        spaceForNewAccount.contaCrash();
        pedra.emojiDasPedras = input_autoRetirar.value
        cleanAutoRetirar();
    },
}

let spaceForNewAccount = { //Espaço para incluir a conta
    // Testa qual espaço está disponivel para mostrar a conta
        contaDouble(resultado){
            if (newAccount1.style.display !== "none"){
        
                newAccount.criarContaDouble(1);
                repeticao.repeticaoDeGaleDouble(resultado,1,1);
        
            }else if (newAccount2.style.display !== "none"){
    
                newAccount.criarContaDouble(2);
                repeticao.repeticaoDeGaleDouble(resultado,2,1);
        
            }else if (newAccount3.style.display !== "none"){
    
                newAccount.criarContaDouble(3);
                repeticao.repeticaoDeGaleDouble(resultado,3,1);
        
            }else if (newAccount4.style.display !== "none"){
    
                newAccount.criarContaDouble(4);
                repeticao.repeticaoDeGaleDouble(resultado,4,1);
        
            }else {
    
                alert('limpe um dos campos para adicionar novas contas')
            }
        },
        contaCrash(){
            if (newAccount1.style.display !== "none"){
                
                newAccount.criarContaCrash(1);
                repeticao.repeticaoDeGaleCrash();
                
            }else if (newAccount2.style.display !== "none"){
    
                newAccount.criarContaCrash(2);
                repeticao.repeticaoDeGaleCrash();
    
            }else if (newAccount3.style.display !== "none"){
    
                newAccount.criarContaCrash(3);
                repeticao.repeticaoDeGaleCrash();
        
            }else if (newAccount4.style.display !== "none"){
                newAccount.criarContaCrash(4);
                repeticao.repeticaoDeGaleCrash();
        
            }else {
    
                alert('limpe um dos campos para adicionar novas contas')
    
            }
        } ,
}

let newAccount = {
    criarContaDouble(contaDisponivel){ //Cria o Layout da conta 

        let btnClean = document.querySelector(`.btn${contaDisponivel}`)
        let account = document.querySelector(`.account${contaDisponivel}`)
        let headerCardTitle = document.querySelector(`.title${contaDisponivel}`)
        let headerCardMultiple = document.querySelector(`.multiple${contaDisponivel}`)
        let newAccount = document.querySelector(`.newaccount${contaDisponivel}`)
    
        account.style.display = "flex";
        btnClean.style.display = "inline-block";
        headerCardTitle.innerHTML = `Conta ${contaDisponivel}`;    
        headerCardMultiple.innerHTML = ``;
        

        newAccount.style.display = "none";
    },
    criarContaCrash(contaDisponivel){//Cria o Layout da conta

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
        repeticaoDeGaleDouble(resultado,contaDisponivel, gale){
            while ( gale <= 3){

                if (gale == 1){
                    calculoDeGale.somaGaleDouble(resultado,contaDisponivel,gale)
                    gale ++
                }else if (gale == 2){
                    calculoDeGale.somaGaleDouble(resultado,contaDisponivel,gale)
                    gale ++
                }else if (gale == 3){
                    calculoDeGale.somaGaleDouble(resultado,contaDisponivel,gale)
                    gale ++
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
        },
        
}


let lossAccount1;
let lossAccount2;

//resultado = confirm(`Quer fazer gale ${gale} com o branco?`)

let calculoDeGale = {

    somaGaleDouble(resultado,contaDisponivel,gale){ // Faz o calculo dos Martingales
        let aposta = document.querySelector(`.aposta-${contaDisponivel}-gale-${gale}`)
        let ganhou = document.querySelector(`.ganhou-${contaDisponivel}-gale-${gale}`)
        let perdeu = document.querySelector(`.perdeu-${contaDisponivel}-gale-${gale}`)
        let branco = document.querySelector(`.branco-${contaDisponivel}-gale-${gale}`)
        
        let betAccount;
        let colorAccount;
        let whiteAccount;
        let lossAccount;


        if (resultado === true){
            
            if ( gale === 1 ){

                betAccount = stone.red.total + stone.white.total + stone.black.total;
                colorAccount = ((stone.red.total + stone.black.total )* gale);
                whiteAccount = (stone.white.total * gale) * 14;
                lossAccount = stone.red.total + stone.white.total + stone.black.total;

            
            } else if (gale === 2 ){
            
                betAccount = (stone.red.total + stone.white.total + stone.black.total) * gale;
                colorAccount = ((stone.red.total + stone.black.total) * gale);
                whiteAccount = (stone.white.total * gale) * 14;
                lossAccount = ((stone.red.total + stone.white.total + stone.black.total) * gale);

            }else if (gale === 3){
            
                betAccount = (stone.red.total + stone.white.total + stone.black.total) * 6;
                colorAccount = ((stone.red.total + stone.black.total ) * 6);
                whiteAccount = (stone.white.total * gale) * 14;
                lossAccount = (stone.red.total + stone.white.total + stone.black.total) * 6;

            }

        }else if(resultado === false) {

            if ( gale === 1 ){

                betAccount = stone.red.total + stone.white.total + stone.black.total;
                colorAccount = ((stone.red.total + stone.black.total )* gale);
                whiteAccount = stone.white.total * 14;
                lossAccount = stone.red.total + stone.white.total + stone.black.total;

            
            } else if (gale === 2 ){
            
                betAccount = (stone.red.total + stone.white.total + stone.black.total) * 3;
                colorAccount = ((stone.red.total + stone.black.total) * 3);
                whiteAccount = stone.white.total * 14;
                lossAccount = ((stone.red.total + stone.white.total + stone.black.total) * 3);

            }else if (gale === 3){
            
                betAccount = (stone.red.total + stone.white.total + stone.black.total) * 6;
                colorAccount = ((stone.red.total + stone.black.total ) * 6);
                whiteAccount = stone.white.total * 14;
                lossAccount = (stone.red.total + stone.white.total + stone.black.total) * 6;

            }
           
        }
    
        aposta.innerHTML = `R$${betAccount.toFixed(1)}`
        ganhou.innerHTML = `R$${colorAccount.toFixed(1)}`
        branco.innerHTML = `R$${whiteAccount.toFixed(1)}`
        perdeu.innerHTML = `-R$${lossAccount.toFixed(1)}`
        whiteAccount = 0
    },
    somaGaleCrash(i){ // Faz o calculo dos Martingales
         let aposta = document.querySelector(`.aposta-${contaDisponivel}-gale-${i}`)
         let ganhou = document.querySelector(`.ganhou-${contaDisponivel}-gale-${i}`)
         let perdeu = document.querySelector(`.perdeu-${contaDisponivel}-gale-${i}`)
    
         let contaAposta = inputValue.value * i; // Quanto apostou
             contaAposta = contaAposta.toFixed(1);
    
         let contaGanhou = inputValue.value* i * input_autoRetirar.value;// Se ganhar
             contaGanhou = contaGanhou.toFixed(1);
    
    
         let contaPerdeu = inputValue.value * i; // Se perder
             contaPerdeu = contaPerdeu.toFixed(1);
    
    
         aposta.innerHTML = `R$${contaAposta}`
         ganhou.innerHTML = `R$${contaGanhou}`
         perdeu.innerHTML = `R$${contaPerdeu}`
     }

}





// Fim da sessão de objetos!!!!!


// Sessão Double! 


function limparStone(){// botão limpar pedras

    stone.red.amount = 0
    stone.white.amount = 0
    stone.black.amount = 0

    select.innerHTML = ' '

    stone.red.amount = []
    stone.white.amount = []
    stone.black.amount = []

    inputValue.value = 1.1;

    btn_calculate.status.disable()
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



// Sessão Crash
var resultadoContaCrash= 0;
function cleanAutoRetirar(){
    input_autoRetirar.value = "";
}

let id = null;


//Alerta clique em Calcular

function cliqueEmCalcular(){  
    containerMenu.style.transition = '0.9s';
    containerMenu.style.outline = '3px solid var(--green)'
    setTimeout(function(){
        containerMenu.style.transition = '0.9s';
        containerMenu.style.outline = '0'
    },500);
}




//Tutorial

/*
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

*/