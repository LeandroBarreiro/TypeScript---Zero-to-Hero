"use strict";
//Exemplo 01: Never - Throw Exception
function error(message) {
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
