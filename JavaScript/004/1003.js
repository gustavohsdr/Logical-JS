// Importação de Biblioteca
const readline = require('readline');

// Criação de interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para converter input para number
const inputNumber = (input) => {
    return parseInt(input);
};

// Pergunta / entrada de dado para input A
rl.question('Valor A: ', (inputA) => {
    const valorA = parseInt(inputA);
    if (!isNaN(valorA)) {

        // Pergunta / entrada de dado para input B
        rl.question('Valor B: ', (inputB) => {
            const valorB = parseInt(inputB);
            if (!isNaN(valorB)) { 

                // Criando soma 
                const soma = valorA + valorB;
                console.log(`SOMA = ${soma}`);
                
                // Fechar interface
                rl.close();
            } else {
                console.log(`Valor B não é válido`);
                rl.close();
            }
        });

    } else {
        console.log(`valor A não é válido`);
        rl.close();
    }
});
