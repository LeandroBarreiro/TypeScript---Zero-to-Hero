//Exemplo 01: Tipo Unknown

let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'oi! tudo bem?';

console.log(valorVariavel);


//Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!

// let valor: unknown;
// let valor1: boolean = valor;

//Exemplo 03: Diferença entre 'any' vs 'Unknown'

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed(2));

//console.log(algumaCoisaUnknown.toFixed(2));

