"use strict";
<<<<<<< HEAD
//Exemplo 01: Tipo Unknown
=======
/**
 * arquivo: unknownType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Uknown'
 * data: 27/07/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
 */
// ==> Exemplo 01: Tipo Unknown
>>>>>>> c7511dd101c08ec9005eef6c47caa4befab79046
let valorVariavel;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
<<<<<<< HEAD
valorVariavel = 'oi! tudo bem?';
console.log(valorVariavel);
//Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!
// let valor: unknown;
// let valor1: boolean = valor;
//Exemplo 03: Diferença entre 'any' vs 'Unknown'
let algumaCoisaAny;
let algumaCoisaUnknown;
console.log(algumaCoisaAny.toFixed(2));
//console.log(algumaCoisaUnknown.toFixed(2));
=======
valorVariavel = 'Oi! Tudo bem?';
// console.log(valorVariavel);
// ===> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!
/*let valor: unknown;

let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor;*/
// ===> Exemplo 03: diferença entre: 'any' vs 'unknown'
let algumaCoisaAny;
let algumaCoisaUnknown;
console.log(algumaCoisaAny.toFixed());
if (typeof algumaCoisaUnknown === 'number') {
    console.log(algumaCoisaUnknown.toFixed());
}
>>>>>>> c7511dd101c08ec9005eef6c47caa4befab79046
