"use strict";
<<<<<<< HEAD
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
=======
/**
 * arquivo: anyType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Any'
 * data: 27/07/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
 */
// ==> Exemplo 01: Tipo Any
const a = 34;
const b = ['Glaucia'];
const result = a + b;
console.log(result);
// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/
// ==> Exemplo 03: Quando devemos usar o tipo any?!
const formulario = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 34,
};
console.log(formulario);
>>>>>>> c7511dd101c08ec9005eef6c47caa4befab79046
