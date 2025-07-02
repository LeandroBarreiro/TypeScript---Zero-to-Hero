//Exemplo 01 - Uso de Colchestes

let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[0]); // Acessando o primeiro elemento do array

//Exemplo 02 - Uso de Colchetes

let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);

//Exemplo 03 - Adicionando mais strings com o metodo 'push'

let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Alemão'); // Adicionando um novo idioma
console.log(idiomas);
idiomas.push('Russo', 'Mandarim'); // Adicionando mais de um idioma
console.log(idiomas);


//Exemplo 04 - Identificar tamanho do array - método 'length'

console.log(idiomas.length); // Verificando o tamanho do array

//Exemplo 05 - Exemplo de Array com Spread Operator

let listaNumeros = [0, 1, 2, 3, 4];
listaNumeros = [... listaNumeros, 5, 6, 7, 8, 9]; // Adicionando números de 5 a 9
console.log(listaNumeros);


//Exemplo 06 - Exemplo de Array com laço de iteração

let linguagensArray: Array<string> = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];

function funcaoLinguagens(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}

funcaoLinguagens(linguagensArray);