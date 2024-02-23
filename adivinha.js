function jogo(){
    var numeroSecreto = parseInt(Math.random() * 11);
    var tentativas = 1;
    var chute;

    alert('Boas vindas ao jogo do número secreto');

    do{ //está tag é responsavel por gerar um laço 
        var chute = prompt('Escolha um número entre 1 e 11'); 
        tentativas = Math.floor(tentativas / numeroSecreto) + 1; //Está tag será responsavel por controlar o numero de tentativas

        if(chute != numeroSecreto){
            alert('parabens! Você acertou o número secreto' + numeroSecreto + 'em' + tentativas + 'tentativas'); 
        }else if(chute < numeroSecreto){
            console.log(chute + "O número secreto é maior. Tentativas" + numeroSecreto);
            alert('O número secreto é maior');
        }else{
            console.log(chute + "O número secreto é menor. Tentativas " + numeroSecreto);
            alert('O número secreto é menor');
        }
        
    }while(chute !== numeroSecreto);
}
jogo();
