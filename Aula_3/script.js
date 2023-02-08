//Desafios para aprimorar o codigo:
//Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente
//Criar um campo e botão para adicionar a imagem pela tela, e não direto no código

//estudar o método push para inserir novos elementos na array 

var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",

    "https://cinearaujo.com.br/filmes/filme3232_cp.jpg", 

    "https://upload.wikimedia.org/wikipedia/pt/9/9b/Carros_p%C3%B4ster.jpg" 
    ];

//listaFilmes [0]= "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg";

//listaFilmes [1]="https://cinearaujo.com.br/filmes/filme3232_cp.jpg";

//listaFilmes [2]="https://upload.wikimedia.org/wikipedia/pt/9/9b/Carros_p%C3%B4ster.jpg";

for (var i =0 ; i<listaFilmes.length ; i++){
    document.write("<img src="+ listaFilmes[i]+">");
}

//<---Realizando a mesma função mas utilizando o "while"--->

//var j=0;
//while( j<listaFilmes.length){
    //document.write("<img src="+listaFilmes[j]+">");
    //j++;
//}