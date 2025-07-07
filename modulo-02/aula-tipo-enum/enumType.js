"use strict";
<<<<<<< HEAD
//Exemplo 01: Numeric Enums (Enums Numérico)
var Idoma;
(function (Idoma) {
    Idoma[Idoma["Portugues"] = 0] = "Portugues";
    Idoma[Idoma["Espanhol"] = 1] = "Espanhol";
    Idoma[Idoma["Ingles"] = 2] = "Ingles";
    Idoma[Idoma["Frances"] = 3] = "Frances";
})(Idoma || (Idoma = {}));
console.log(Idoma);
//console.log(Idoma[1]); para acessar um especifico 
//Exemplo 02: String Enums
=======
/**
 * arquivo: enumType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 20/06/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#enum
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01: Numeric Enums (Enums Numérico)
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// ==> Exemplo 02: String Enums
>>>>>>> c7511dd101c08ec9005eef6c47caa4befab79046
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia);
function comida(c) {
<<<<<<< HEAD
    return 'Comida muito apetitosa!';
}
console.log(comida(2 /* Comida.Pizza */));
// console.log(comida(5)); erro
//Exemplo 04: Quando usar enum?!
=======
    return 'Comidas muito apetitosas!';
}
console.log(comida("Pizza" /* Comida.Pizza */));
console.log(comida("Churrasco" /* Comida.Churrasco */));
// console.log(comida(5));
// ==> Exemplo 04: Quando usar enum?!
>>>>>>> c7511dd101c08ec9005eef6c47caa4befab79046
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
<<<<<<< HEAD
const conluidaTarefa = {
=======
const concluidaTarefa = {
>>>>>>> c7511dd101c08ec9005eef6c47caa4befab79046
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
};
<<<<<<< HEAD
if (conluidaTarefa.status === Tarefa.Done) {
    console.log(conluidaTarefa.descricao);
    console.log('Enviar e-mail: Tarefa concluída!');
=======
if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluída!');
>>>>>>> c7511dd101c08ec9005eef6c47caa4befab79046
}
