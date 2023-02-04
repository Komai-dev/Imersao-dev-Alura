var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto) {
//Enquanto o chute for diferente do número secreto
    var chute = prompt('Digite um número entre 0 e 1000');

    //if = Se o chute for igual o número secreto
    if (chute == numeroSecreto) {
    alert('Acertou!')
    }
   
    //else if = Se não for igual o número secreto
    else if (chute > numeroSecreto) {
    alert('Errou... O número secreto é menor')
    }
    else if (chute < numeroSecreto) {
    alert('Errou... O número secreto é maior')
    }
}
