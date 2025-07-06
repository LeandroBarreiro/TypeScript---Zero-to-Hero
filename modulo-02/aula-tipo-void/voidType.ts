// Exemplo 01 - funções

function logError(errorMensage: string): void {
    console.log(errorMensage);
    //return errorMensage;
}

logError('Required field - Name!');

// Exemplo 02 - funções
const logsErrorExample2 = (erroMensage: string): void => {
    console.log(erroMensage);
};

logsErrorExample2('Required field - Surname!');

// Exemplo 03 - void: variáveis

let variavelExemploVoid: void;
//variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;
//variavelExemploVoid = 'teste';

console.log(variavelExemploVoid);

