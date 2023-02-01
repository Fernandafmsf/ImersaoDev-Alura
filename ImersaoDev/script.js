
var nome = prompt("Qual é o seu nome?")
var valorEmDolar = prompt("Digite um valor em dólar: ");
var cotacaoEmDolar = 5.32;
var cotacaoEmBitcoin= 23115.00;

var valorEmReal=
(valorEmDolar*cotacaoEmDolar);

valorEmReal=valorEmReal.toFixed(2);

var valorEmBitcoin=(valorEmDolar/cotacaoEmBitcoin);
valorEmBitcoin=valorEmBitcoin.toFixed(2);


document.querySelector(".resultadoEmBitcoin").innerHTML= 
"Olá, " + nome + "! O valor US$" +valorEmDolar+ " em real é igual a: R$"+ valorEmReal+ " e em bitcoin é igual a: " + +valorEmBitcoin;

alert("Hello");
