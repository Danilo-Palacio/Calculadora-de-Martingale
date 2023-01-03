var inputQuantia = document.querySelector('#quantia');
var newAccount1 = document.querySelector('.newaccount1')
var newAccount2 = document.querySelector('.newaccount2')
var newAccount3 = document.querySelector('.newaccount3')
var newAccount4 = document.querySelector('.newaccount4')  



function cliqueMetade(){
    inputQuantia.value = inputQuantia.value / 2 ;
}

function cliqueDobro(){
    inputQuantia.value = inputQuantia.value * 2 ;
}


    let num;

    
   
function btnNovaConta(){
 
    let btnClean = document.querySelector(`.btn${num}`)
    let account = document.querySelector(`.account${num}`)
    let headerCardTitle = document.querySelector(`.title${num}`)
    let headerCardMultiple = document.querySelector(`.multiple${num}`)
    let newAccount = document.querySelector(`.newaccount${num}`)

    if (newAccount1.style.display !== "none"){
        
        num = 1

        account.style.display = "flex";
        btnClean.style.display = "inline-block";
        headerCardTitle.innerHTML = `Conta ${num}`;
        headerCardMultiple.innerHTML = "1.5X";
        newAccount.style.display = "none";

        let aposta = document.querySelector('.card-account-description')
        aposta.innerHTML = inputQuantia.value

        num = 0

    }else if (newAccount2.style.display !== "none"){

        num = 2

        account.style.display = "flex";
        btnClean.style.display = "inline-block";
        headerCardTitle.innerHTML = `Conta ${num}`;
        headerCardMultiple.innerHTML = "1.5X";
        newAccount.style.display = "none";

        let aposta = document.querySelector('.card-account-description')
        aposta.innerHTML = inputQuantia.value

        num = 0
        
    }else if (newAccount3.style.display !== "none"){
        
        num = 3

        account.style.display = "flex";
        btnClean.style.display = "inline-block";
        headerCardTitle.innerHTML = `Conta ${num}`;
        headerCardMultiple.innerHTML = "1.5X";
        newAccount.style.display = "none";
        
        let aposta = document.querySelector('.card-account-description')
        aposta.innerHTML = inputQuantia.value

        num = 0

    }else if (newAccount4.style.display !== "none"){
        
        num = 4

        account.style.display = "flex";
        btnClean.style.display = "inline-block";
        headerCardTitle.innerHTML = `Conta ${num}`;
        headerCardMultiple.innerHTML = "1.5X";
        newAccount.style.display = "none";

        let aposta = document.querySelector('.card-account-description')
        aposta.innerHTML = inputQuantia.value

        num = 0

    }else {
        alert('limpe um dos campos para adicionar novas contas')
    }
    
}

function limparConta(num){

    let btnClean = document.querySelector(`.btn${num}`)
    let account = document.querySelector(`.account${num}`)
    let headerCardTitle = document.querySelector(`.title${num}`)
    let headerCardMultiple = document.querySelector(`.multiple${num}`)
    let newAccount = document.querySelector(`.newaccount${num}`)

    if (num == 1 ){
        
        btnClean.style.display = 'none'
        account.style.display = 'none'
        headerCardTitle.innerHTML = " ";
        headerCardMultiple.innerHTML = " ";
        newAccount.style.display = "flex";

    }else if (num == 2){

        btnClean.style.display = 'none'
        account.style.display = 'none'
        headerCardTitle.innerHTML = " ";
        headerCardMultiple.innerHTML = " ";
        newAccount.style.display = "flex";

    }else if (num == 3){

        btnClean.style.display = 'none'
        account.style.display = 'none'
        headerCardTitle.innerHTML = " ";
        headerCardMultiple.innerHTML = " ";
        newAccount.style.display = "flex";

    }else if (num == 4){

        btnClean.style.display = 'none'
        account.style.display = 'none'
        headerCardTitle.innerHTML = " ";
        headerCardMultiple.innerHTML = " ";
        newAccount.style.display = "flex";
        
    }

}
