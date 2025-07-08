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

// Exemplo 05: Usando optional no object

interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string; // Propriedade opcional
}

function onboarding05(pessoa: Pessoa05) {
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

console.log(onboarding05({nome: 'Leandro Barreiro', funcao: 'Dev TypesScript', linguagem: 'TypeScript'}));

// Exemplo 06: Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o 'readonly')

interface Pessoa06 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string; // Propriedade somente leitura
}

function onboarding06(pessoa: Pessoa06) {
   return (
    'Seja bem-vindo ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.' +
    ' Seu email é ' +
    pessoa.email +
    '.'
   );
}

console.log(onboarding06({nome: 'Leandro Barreiro', funcao: 'Dev TypesScript', linguagem: 'TypeScript', email: 'leandrobarreiro15@gmail.com'}));


// Exemplo 07: Tipod de extensões (heranças)

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filho extends Mae, Pai {
    idade: number;
}

const filho: Filho = {
    nome: 'Leandro',
    sobrenome: 'Barreiro',
    idade: 19,
}

//Exemplo 08: tipos de interseções

interface Cachorro {
    tipo: string;
}

interface Gato {
    tipo: string;
}

type Animal = Cachorro & Gato; // Interseção de tipos


//Exemplo 09 - Genercs Objects

type Usuario =  {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: boolean;
}

const usuario: Usuario = {
    nome: 'Leandro Barreiro',
    email: 'leandrobarreiro15@gmail.com'
}

function acessarSistema(usuario: Usuario): Usuario { // Função que recebe um objeto do tipo Usuario e retorna o mesmo tipo
    return usuario; // (usuario: Usuario) parametro | : Usuario tipo de retorno
}

console.log(acessarSistema(usuario));
