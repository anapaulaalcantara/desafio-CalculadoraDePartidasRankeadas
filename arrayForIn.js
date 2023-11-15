/*
Criei uma função que retorna o cálculo do saldo de vitórias 
e aramazenei em uma variável para ser usada em outra parte
do código.

Usei um array para determinar os níveis e um 'For-In' para
percorrer o array e encontrar o nível do jogador baseado
no saldo de vitórias.

Funciona inclusive se o saldo de vitórias for negativo.
*/

// Variáveis
let saldoVitorias = calcular(100, 200);
let nivel = " ";

// Função que calcula e retorna o saldo de vitórias
function calcular(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Array que determina todos os níveis
const niveis = [
    { nome: 'Ferro', limiteInferior: 0, limiteSuperior: 10 },
    { nome: 'Bronze', limiteInferior: 11, limiteSuperior: 20 },
    { nome: 'Prata', limiteInferior: 21, limiteSuperior: 50 },
    { nome: 'Ouro', limiteInferior: 51, limiteSuperior: 80 },
    { nome: 'Diamante', limiteInferior: 81, limiteSuperior: 90 },
    { nome: 'Lendário', limiteInferior: 91, limiteSuperior: 100 },
    { nome: 'Imortal', limiteInferior: 101, limiteSuperior: Infinity },
];

// Percorre o array para encontrar o nivel do jogador baseado no saldo de vitórias
for (const { nome, limiteInferior, limiteSuperior } of niveis) {
    if (saldoVitorias >= limiteInferior && saldoVitorias <= limiteSuperior) {
        nivel = nome;
        break;
    }
}

// Imprime a string contendo o resultado utilizando Interpolação de strings
console.log(`O Herói tem ${saldoVitorias} de saldo de vitórias e está no nível ${nivel}.`);
