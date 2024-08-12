var combustivel = ["gasolina", "etanol", "diesel"];

switch(combustivel){
    case 'gasolina':
        valor *= 5.30;
        mensagem = "Quantos de Gasolina Deseja Colocar";
        break;
    case 'etanol':
        valor *= 3.40;
        mensagem = "Quantos de Etanol Deseja Colocar";
        break;
    case 'diesel':
        valor *= 5.20;
        mensagem = "Quantos de Diesel Deseja Colocar";
        break;
    default:
        mensagem = parseFloat(prompt("O Que Deseja?"));
        console.log(gasolina, etanol, diesel);
}
