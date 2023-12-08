// Importação da Biblioteca:
const readline = require('readline');

// Criação da Interface de Leitura:
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao Usuário e Processamento de Entrada:
rl.question('Digite Valor de A: ',(inputValorA)  => {
    rl.question('Digite Valor de B: ',(inputValorB) => {
        if (!isNaN(inputValorA, inputValorB)) {
            const valorA = parseInt(inputValorA);
            const valorB = parseInt(inputValorB);
            const soma = valorA + valorB;
            console.log(`X = ${soma}`);
            //Fechamento da Interface:
            rl.close()
        } else {
            console.log('Não é um número');   
        }
        // Fechamento da Interface:
        rl.close(); 

    })
})

