let red = [];
let white= [];
let black = [];
let inputValue = document.querySelector('#value')
let divCor= document.querySelector('#color')


let stone={
    red:{
        amount:[],
        color:'red',
        multiple: 2,
        emoji:`\u{1F534}`
    },
    white:{
        amount:[],
        color: 'white',
        multiple: 14,
        emoji:`\u{26AA}`,
    },
    black:{
        amount:[],
        color: 'black',
        multiple: 2,
        emoji:`\u{26AB}`,

    }
}



function insert(color){
    if( color === 'red' ){
        stone.red.amount.push(Number(inputValue.value));
        divCor.innerHTML = `${stone.red.amount}`

        inputValue.value = ''

    }else if ( color === 'white' ){
        stone.white.amount.push(Number(inputValue.value));
        divCor.innerHTML = `${stone.white.amount}`

        inputValue.value = ''

    } else if( color === 'black' ){
        stone.black.amount.push(Number(inputValue.value));
        divCor.innerHTML = `${stone.black.amount}`

        inputValue.value = ''
    }
}

/*
function testePedra(color, multiple, emoji){
    console.log(`A color que você escolheu é ${color} o Multiplo é ${multiple}X e o emoji é ${emoji}`)
}

console.log(testePedra(stone.red.color,stone.red.multiple,stone.red.emoji))
*/