const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe Raio: ', (inputRaio) => {
    const raio = parseFloat(inputRaio);
    const pi = 3.14159;
    // foi utilizado o metodo math.pow (base, expoente)
    const area = pi * Math.pow(raio, 2);
    console.log(`O valor da Area = ${area.toFixed(4)}`);
    rl.close();
});