/*
Criei um função e armazenei o resultado da função em uma variável para que
possa ser usada em outra parte de código.

Usei 'If-Else' para determinar o nivel com base no saldo de vitórias.

Usei 'console.log' para imprimir o resultado.

Funciona inclusive se o saldo de vitórias for negativo.
*/

// Variáveis
let saldoVitorias = calcular(258, 30);
let nivel = " ";

// Função que calcula o saldo de vitórias
function calcular(vitorias, derrotas){
    diferenca = vitorias - derrotas;
    return diferenca;
}

// Determina o nível com base no saldo de vitórias
if (saldoVitorias < 10) {
    nivel = "Ferro";
} else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
} else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = "Prata";
} else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = "Ouro";
} else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    nivel = "Diamante";
} else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

// Imprime a string contendo o resultado utilizando concatenação de strings
console.log('O Herói tem ' + saldoVitorias + ' de saldo de vitórias e está no nível ' + nivel + '.')  

