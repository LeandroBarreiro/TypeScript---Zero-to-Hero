// Variaveis [Type Annotation]

let nome: string = 'Leandro Barreiro';
console.log(nome);


//Arrays [Type Annotation]
let animais: string[] = ['Elefante', 'Girafa', 'Gato'];
console.log(animais);



//Objeto [Type Annotation]
let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 150000}

console.log(carro);


//Function [Type Annotation]

function multiplicarNumero(num1: number, num2: number){
    return num1 * num2;
}

console.log(multiplicarNumero(2,5));
