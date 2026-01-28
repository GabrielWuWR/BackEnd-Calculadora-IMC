var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var error = 400;

function calcularIMC(altura, peso) {
    alturaUser = parseFloat(altura);
    pesoUser = parseFloat(peso);

    if (isNaN(alturaUser) || alturaUser < 0.54 || alturaUser > 2.51) {
        return error;
    }
    if (isNaN(pesoUser) || pesoUser < 2.1 || pesoUser > 635) {
        return error;
    }

    let resultado = pesoUser / (alturaUser ** 2);
    return resultado.toFixed(2);
}

console.log('================================');
console.log('======CALCULADORA DE IMC========');
console.log('================================');

entradaDeDados.question('Digite seu nome: ', (nomeUsuario) => {
    console.log(`Olá ${nomeUsuario} seja bem vindo 🥰, vamos calcular seu imc`);

    entradaDeDados.question('Para começar, digite sua altura: ', (alturaUsuario) => {
        entradaDeDados.question('Certo, agora digite seu peso: ', (pesoUsuario) => {
            var imc = calcularIMC(alturaUsuario, pesoUsuario);

            if (imc == error) {
                console.log('Algum campo não foi preenchido corretamente verifique se digitou corretamente');
            } else {
                console.log(`${nomeUsuario} seu imc atual é ${imc}`);
            }

        });
    });
});