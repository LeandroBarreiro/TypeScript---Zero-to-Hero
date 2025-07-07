"use strict";
// Exemplo 01 - funções
function logError(errorMensage) {
    console.log(errorMensage);
    //return errorMensage;
}
logError('Required field - Name!');
// Exemplo 02 - funções
const logsErrorExample2 = (erroMensage) => {
    console.log(erroMensage);
};
logsErrorExample2('Required field - Surname!');
// Exemplo 03 - void: variáveis
let variavelExemploVoid;
//variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;
//variavelExemploVoid = 'teste';
console.log(variavelExemploVoid);
