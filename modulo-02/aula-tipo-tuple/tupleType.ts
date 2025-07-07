//Exemplo 01 - Uso simples de Tuplas em TypesScript

let pessoa: [string, string, number];
pessoa = ['Leandro Barreiro', 'Desenvolvedor em BemSoft', 19]; //Após criar uma tupla não é possível alterar o tamanho dela e a ordem dos tipos de dados deve ser respeitada
console.log(pessoa);


//Exemplo 02 - Acessando o valor da Tupla

let pessoa1: [string, string, number];
pessoa1 = ['Leandro Barreiro', 'Desenvolvedor em BemSoft', 19]; 
console.log(pessoa1[1]); //Acessar valores em tuplas

<<<<<<< HEAD
//Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)

let pessoa2: [nome: string, posicao: string, idade: number]; //apenas nomeia o que cada posição significa
pessoa2 = ['Leandro Barreiro', 'Desenvolvedor em BemSoft', 19]; 
console.log(pessoa2);

//Exemplo 04 - Usando Tuplas com Spread Operator

let listasFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listasFrutas);

//Exemplo 05 - Lista Herogênea de Tupla

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listasFrutas];
console.log(listaFrutas2);

//Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]) {
    return[... nomes, ... idades];
}

let resultado = listarPessoas(['Leandro Barreiro', 'Érica Barreiro'], [19, 21])
console.log(resultado);


//Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string,  sobrenome: string]

function criarPessoa(... nome: Nome) {
    return[...nome];
}

console.log(criarPessoa('Leandro', 'Barreiro'));
console.log(criarPessoa('Leandro', 'dos Santos', 'Barreiro'));


=======
//Exemplo 03 - Uso simples de Tuplas em TypesScript



//Exemplo 04 - Uso simples de Tuplas em TypesScript


//Exemplo 05 - Uso simples de Tuplas em TypesScript


//Exemplo 06 - Uso simples de Tuplas em TypesScript

//Exemplo 07 - Uso simples de Tuplas em TypesScript
>>>>>>> c7511dd101c08ec9005eef6c47caa4befab79046
