"use strict";
//Exemplos: number
let num1 = 23.0;
let num2 = 0x78CF;
let num3 = 0o77;
let num4 = 0b110001;
console.log('Number - Ponto Flutuante', num1);
console.log('Number - Hexadecimal', num2);
console.log(typeof (num2)); // Diz o tipo da variavel
console.log('Number - Octal', num3);
console.log('Number - Binario', num4);
//Exemplo: bigint
let big1 = 9007199254740991n;
let big2 = 9007199254740995n;
let big3 = 0x20000000000003n;
let big4 = 9007199254740995n;
console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);
