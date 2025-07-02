"use strict";
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
    return 'Comida muito apetitosa!';
}
console.log(comida(2 /* Comida.Pizza */));
// console.log(comida(5)); erro
//Exemplo 04: Quando usar enum?!
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const conluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
};
if (conluidaTarefa.status === Tarefa.Done) {
    console.log(conluidaTarefa.descricao);
    console.log('Enviar e-mail: Tarefa concluída!');
}
