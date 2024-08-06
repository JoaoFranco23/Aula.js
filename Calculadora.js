    var operador;
    var valor;
    var valor2;
    var readLineSync = require('readline-sync'); //tag readlineSync, permite que o script troque informações no console
    var operador = readLineSync.question("Insira a Operacão que Deseja Efetuar (+) (-) (*) (/)? : \n");
    var valor = parseFloat(reaLineSync.question("Insira o Numero: \n")); //a tag parseFloat converte uma string para numero
    var valor2 = parseFloat(reaLineSync.question("Insira o Numero: \n"));
    if(operador == "+"){
        var operador = readLineSync.question(prompt("Digite a Operação Desejada"));
        
    }
console.log('O resultado é', subt(operador, valor, valor2));
