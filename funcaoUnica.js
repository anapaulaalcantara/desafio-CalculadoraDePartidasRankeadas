/*
Criei uma função única que imprime a string com o resultado 
quando a função é chamada.

Funciona inclusive se o saldo de vitórias for negativo.

Observação: Se a função tiver o objetivo principal de calcular o nível 
e fornecer esse valor para ser usado em outro lugar do código, 
seria mais apropriado usar 'return'. No entanto, se o objetivo 
principal for apenas exibir a mensagem no console e 
não necessariamente usá-la em outros cálculos ou lógica, 
então 'console.log' pode ser suficiente.
*/

function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no saldo de vitórias
    let nivel;
    if (saldoVitorias <= 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    // Imprime a string contendo o resultado utilizando Interpolação de strings
    console.log(`O Herói tem ${saldoVitorias} de saldo de vitórias e está no nível de ${nivel}`);
}

// Chama a função
calcularNivel(200, 301);

