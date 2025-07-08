"use strict";
//Exemplo 01 - Uso do if
const numeroMax = 100;
let contador = 100;
if (contador < numeroMax) {
    contador++;
}
console.log(contador);
//Exemplo 02 - Uso do if
const permissaoIdadeDirigir = 18;
if (permissaoIdadeDirigir >= 18) {
    console.log('Você está habilitado para dirigir.');
}
//Exemplo 03 - Uso do if-else
const permissaoIdadeDirigir01 = 17;
if (permissaoIdadeDirigir01 >= 18) {
    console.log('Você está habilitado para dirigir.');
}
else {
    console.log('Você não está habilitado para dirigir.');
}
//Exemplo 04 - Uso do if-else if-else
let desconto;
let itemContador = 14;
if (itemContador > 0 && itemContador <= 5) {
    desconto = 5;
}
else if (itemContador > 5 && itemContador <= 10) {
    desconto = 10;
}
else {
    desconto = 15;
}
console.log(`Você teve um desconto de... ${desconto}% de desconto!`);
//Exemplo 05 - Ternario (? : )
const idadeVotacao = 18;
if (idadeVotacao >= 18) {
    console.log('Você é elegível para votar.');
}
else {
    console.log('Você não é elegível para votar.');
}
const idadeVotacaoTernario = 15;
const podeVotar = (idadeVotacaoTernario >= 18) ? 'Você é elegíbel para votar.' : 'Você não é elegível para votar.';
console.log(podeVotar);
