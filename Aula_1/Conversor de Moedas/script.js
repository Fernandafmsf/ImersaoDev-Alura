function calculate(){
    let valorEmDolar=document.getElementById("valorEmDolar").value;
    let nome=document.getElementById("nome").value;
    const cotacaoEmDolar=5.32;
    const cotacaoEmBitcoin=23115.00;

    let valorEmReal = valorEmDolar*cotacaoEmDolar;
    let valorEmBitcoin = valorEmDolar/cotacaoEmBitcoin;

    valorEmBitcoin=valorEmBitcoin.toFixed(5);


    
    document.querySelector(".resultado").innerHTML=
    "Olá, "+nome+ "! O valor US$"+valorEmDolar+" em real, fica: R$"+valorEmReal+ " e em bitcoin, fica: "+valorEmBitcoin;
}



//var nome = prompt("Qual é o seu nome?")
//var valorEmDolar = prompt("Digite um valor em dólar: ");
//var cotacaoEmDolar = 5.32;
//var cotacaoEmBitcoin= 23115.00;

//var valorEmReal=
//(valorEmDolar*cotacaoEmDolar);

//valorEmReal=valorEmReal.toFixed(2);

//var valorEmBitcoin=(valorEmDolar/cotacaoEmBitcoin);
//valorEmBitcoin=valorEmBitcoin.toFixed(5);


//document.querySelector(".resultadoEmBitcoin").innerHTML= 
//"Olá, " + nome + "! O valor US$" +valorEmDolar+ " em real é igual a: R$"+ valorEmReal+ " e em bitcoin é igual a: " + +valorEmBitcoin;


