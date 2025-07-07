// Exemplo 01: Básico do uso do Type Object

const humano = {
    nome: 'Leandro',
    sobrenome: 'Barreiro',
    idade: 19,
    funcao: 'Dev TypeScript'
};
console.log(humano);


//Exemplo 02: Object como parâmetros de função (Eles podem ser anônimos)

function onboarding01(funcionario: {nome: string}) {
    return 'Seja bem-vindo ' + funcionario.nome;
}

console.log(onboarding01({nome: 'Leandro barreiro'}));


//Exemplo 03 objects nomeados

interface Humano {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Humano) {
   return (
    'Seja bem-vindo ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.'
   );
}

console.log(onboarding02({nome: 'Leandro Barreiro', funcao: 'Dev TypesScript'}));

//Exemplo 04: obejct como type alias

type Pessoa04 = {
    nome: string;
    funcao: string;
    linguagem: string;
}

function onboarding03(pessoa: Pessoa04) {
   return (
    'Seja bem-vindo ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
   );
}

console.log(onboarding03({nome: 'Leandro Barreiro', funcao: 'Dev TypesScript', linguagem: 'TypeScript'}));

