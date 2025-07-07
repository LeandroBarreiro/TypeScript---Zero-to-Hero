"use strict";
//Exemplo 01: Null
let valriavelTesteNull = null; // null é um valor que representa a ausência intencional de qualquer valor ou objeto
console.log(valriavelTesteNull); // Saída: null
console.log(typeof valriavelTesteNull); // Saída: object (isso é um comportamento peculiar do JavaScript)
//Exemplo 02: Undefined
let variavelTesteUndefined; // Variável declarada, mas não inicializada
console.log(variavelTesteUndefined); // Saída: undefined
console.log(typeof variavelTesteUndefined); // Saída: undefined
//Exemplo 03: Diferença e similaridades entre null e undefined
console.log('Exemplo 01:', null == undefined); // true, ambos são considerados "false" e equivalentes em comparação não estrita
console.log('Exemplo 02:', null === undefined); // false, comparação estrita verifica o tipo e valor
