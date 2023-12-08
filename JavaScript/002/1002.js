/*
Questão está no bloco de notas.
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite Valor de A: ',(inputValorA)  => {
    rl.question('Digite Valor de B: ',(inputValorB) => {
        if (!isNaN(inputValorA, inputValorB)) {
            const valorA = parseInt(inputValorA);
            const valorB = parseInt(inputValorB);
            const soma = valorA + valorB;
            console.log(`X = ${soma}`);
            rl.close()
        } else {
            console.log('Não é um número');   
        }
        rl.close();

    })
})

