//1.
console.log("Hello World")

//2.
let numberOne = 1
let numberTwo = 2 
console.log(numberOne + numberTwo)

//3.

if(typeof numberOne == 'number'){
    console.log('É um número')
}
else {
    console.log('Não é um número')
}

//4.
let name = 'Mateus'

if(typeof name == 'string'){
    console.log('É uma string')
}
else{
    console.log('Não é uma string')
}

//5.
let boo = true
if(typeof boo == 'boolean' ){
    console.log('É um booleano')
}
else{
    console.log('Não é um booleano')
}

//6. 
console.log( numberTwo - numberOne)

//7.
console.log(numberTwo * numberOne)

//8.
console.log(numberOne / numberTwo)

//9.

question = prompt('Qual o seu número?')
number = Number(question)

function isEven(num) {
    return num%2 === 0 
}

if(isEven(number)){
    alert(`o número ${question} é par`)
}
else{alert(`O número ${question} é ímpar`)}

//10.

numberTwo = Number(question)

function isNotEven(num) {
    return num%2 === 1 
}

if(isNotEven(number)){
    alert(`o número ${question} não é par`)
}
else{alert(`O número ${question} não é ímpar`)}

