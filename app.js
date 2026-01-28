var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularIMC(altura, peso) {
    return peso / altura ^ 2;
}

console.log('================================');
console.log('======CALCULADORA DE IMC========');
console.log('================================');

entradaDeDados.question('Digite seu nome: ', (nomeUsuario)=>{
    console.log(`Olá ${nomeUsuario} seja bem vindo 🥰, vamos calcular seu imc`);

    entradaDeDados.question('Para começar, digite sua altura: ', (alturaUsuario)=>{
        entradaDeDados.question('Certo, agora digite seu peso: ', (pesoUsuario)=>{
            var imc = calcularIMC(alturaUsuario, pesoUsuario);

            console.log(`${nomeUsuario} seu imc atual é ${imc}`);
        });
    });
});