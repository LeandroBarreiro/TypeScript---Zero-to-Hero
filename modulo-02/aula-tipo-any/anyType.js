"use strict";
//Exemplo 01: Tipo Any
const a = 888;
const b = ['Leandro'];
const result = a + b;
console.log(result); //Apenas concatena duas varias 
//Exemplo 02: Quando o tipo 'Any' é inferido implicitamente
let frase;
frase = 'Oi pessoal! Tudo bem?'; //Essa variavel é do tipo Any
console.log(frase);
//Exemplo 03: Quando devemos usar o tipo any?
const formulario = {
    nome: 'Leandro',
    sobrenome: 'Barreiro',
    idade: 19,
};
