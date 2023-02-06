var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg","https://cinearaujo.com.br/filmes/filme3232_cp.jpg", "https://upload.wikimedia.org/wikipedia/pt/9/9b/Carros_p%C3%B4ster.jpg" ];

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