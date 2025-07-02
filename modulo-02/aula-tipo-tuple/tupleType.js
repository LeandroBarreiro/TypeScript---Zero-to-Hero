"use strict";
//Exemplo 01 - Uso simples de Tuplas em TypesScript
let pessoa;
pessoa = ['Leandro Barreiro', 'Desenvolvedor em BemSoft', 19]; //Após criar uma tupla não é possível alterar o tamanho dela e a ordem dos tipos de dados deve ser respeitada
console.log(pessoa);
//Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Leandro Barreiro', 'Desenvolvedor em BemSoft', 19];
console.log(pessoa1[1]); //Acessar valores em tuplas
//Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)
let pessoa2;
pessoa2 = ['Leandro Barreiro', 'Desenvolvedor em BemSoft', 19];
console.log(pessoa2);
//Exemplo 04 - Usando Tuplas com Spread Operator
let listasFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listasFrutas);
//Exemplo 05 - Lista Herogênea de Tupla
let listaFrutas2 = [5, true, ...listasFrutas];
console.log(listaFrutas2);
//Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Leandro Barreiro', 'Érica Barreiro'], [19, 21]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Leandro', 'Barreiro'));
console.log(criarPessoa('Leandro', 'dos Santos', 'Barreiro'));
