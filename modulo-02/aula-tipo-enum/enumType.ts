//Exemplo 01: Numeric Enums (Enums Numérico)

enum Idoma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
}

console.log(Idoma);
//console.log(Idoma[1]); para acessar um especifico 

//Exemplo 02: String Enums

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

console.log(Dia);

//Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando const)

const enum Comida {
    Hamburger,
    Massa,
    Pizza,
    Torta, 
    Churrasco
}

function comida(c: Comida) {
    return 'Comida muito apetitosa!';
}

console.log(comida(Comida.Pizza));
// console.log(comida(5)); erro



//Exemplo 04: Quando usar enum?!


enum Tarefa {
    Todo,
    Progress,
    Done,
}

const conluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
};

if(conluidaTarefa.status === Tarefa.Done) {
    console.log(conluidaTarefa.descricao);
    console.log('Enviar e-mail: Tarefa concluída!');
    
}