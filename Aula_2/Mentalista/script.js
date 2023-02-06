var numeroAleatorio = parseInt(Math.random()*1001);
var numeroDeTentativas=0;

while(chute!=numeroAleatorio){
    var chute = prompt("Chute um número de 0 a 1000");

    if(chute==numeroAleatorio){
        alert("Parabens, você acertou!")
        alert("Voce fez: "+numeroDeTentativas+ " tentativas");
    }else if(chute>numeroAleatorio){
        alert("O número é menor")
    } else if (chute<numeroAleatorio){
        alert("O numero é maior")
    }
    numeroDeTentativas++;

} 

