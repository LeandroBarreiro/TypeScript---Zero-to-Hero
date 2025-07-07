//Exemplo 01: Never - Throw Exception

function error(message: string): never {
    throw new Error(message);
}
console.log(error('Erro de mensagem - 01'));


//Exemplo 02: Never inferido automaticamente

function rejectMessage() {
    return error('Erro de mensagem - 02');
}

console.log(rejectMessage());

//Exemplo 03: Função que contém loop infinit retorna o tipo never

const loopInfinito = function loop() {
    while (true) {
        console.log('Oi, Developers!');
    }
};

console.log(loopInfinito());

//Exemplo 04: Diferença entre void e never

const algumaCoisaVoid: void = null; // void pode receber null ou undefined

//const algumaCoisaNever: never = null; // never não pode receber null ou undefined

console.log(algumaCoisaVoid);

//console.log(algumaCoisaNever); // Isso vai gerar um erro de compilação, pois never não pode ser atribuído a uma variável



