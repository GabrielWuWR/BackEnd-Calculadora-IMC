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
    return resultado.toFixed(1);
}

function mensagemIMC(imc) {
    if (imc <= 18.5) {
        return "abaixo do peso.";
    } else if (imc >= 18.6 && imc <= 24.9) {
        return "com o peso ideal."
    } else if (imc >= 25 && imc <= 29.9) {
        return "levemente acima do peso."
    } else if (imc >= 30 && imc <= 34.9) {
        return "com obesidade grau I."
    } else if (imc >= 35 && imc <= 39.9) {
        return "com obesidade grau II."
    } else if (imc >= 40) {
        return "com obesidade grau III."
    }
}

function mostrarResultado(imc, nomeUsuario) {
    var mensagem = mensagemIMC(imc);
    console.log('');
    console.log('================================');
    console.log(`${nomeUsuario} seu imc atual é ${imc}`);
    console.log(`Você está ${mensagem}`);
    console.log('================================');
}

console.log('================================');
console.log('======CALCULADORA DE IMC========');
console.log('================================');

entradaDeDados.question('Digite seu nome: ', (nomeUsuario) => {
    console.log(`Olá ${nomeUsuario} seja bem vindo 🥰, vamos calcular seu imc`);

    entradaDeDados.question('Para começar digite sua altura: ', (alturaUsuario) => {
        entradaDeDados.question('Certo, agora digite seu peso: ', (pesoUsuario) => {
            var imc = calcularIMC(alturaUsuario, pesoUsuario);

            if (imc == error) {
                console.log('Algum campo não foi preenchido corretamente.');
            } else {
                mostrarResultado(imc, nomeUsuario);
            }
        });
    });
});