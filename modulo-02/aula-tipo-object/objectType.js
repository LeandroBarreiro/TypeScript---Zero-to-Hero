"use strict";
// Exemplo 01: Básico do uso do Type Object
const humano = {
    nome: 'Leandro',
    sobrenome: 'Barreiro',
    idade: 19,
    funcao: 'Dev TypeScript'
};
console.log(humano);
//Exemplo 02: Object como parâmetros de função (Eles podem ser anônimos)
function onboarding01(funcionario) {
    return 'Seja bem-vindo ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Leandro barreiro' }));
function onboarding02(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({ nome: 'Leandro Barreiro', funcao: 'Dev TypesScript' }));
function onboarding03(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ nome: 'Leandro Barreiro', funcao: 'Dev TypesScript', linguagem: 'TypeScript' }));
