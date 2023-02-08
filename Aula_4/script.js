var listaFilmesFavoritos = [];
var listaTrailersFilmesFavoritos = [];


function adicionarFilme(){
    //primeiro, declaramos a variavel e pegamos o elemento do input, definido pelo usuário
    var filmeFavorito=document.getElementById('filmes').value;

   var trailersFilmes = document.getElementById("trailer").value;

    //depois, checamos se a informação fornecida pelo usuário está de acordo com o padrão 
   if (filmeFavorito.endsWith('.jpg')|| filmeFavorito.endsWith(".jpeg")){

    //aqui, não exibimos mensagem de erro e adicionamos a informação dada pelo usuário na lista através do método push, para que possamos utilizar essa lista posteriormente

    document.getElementById("mensagemDeErro").innerHTML='';

    listaFilmesFavoritos.push(filmeFavorito);
    listaTrailersFilmesFavoritos.push(trailersFilmes);

    recarregarFilmes();
    limparCampo();

   } else{
    document.getElementById("mensagemDeErro").innerHTML='Endereço de imagem inválido, tente novamente'; 

    limparCampo();
   }    

}


//para carregar os filmes, foi criada uma função. Adicionei os elementos do input a um array de nome 'listafilmesfavoritos' através do método push na função acima. Agora, criamos um laço de repetição para que a cada novo filme adicionado, a função seja recarregada 
function recarregarFilmes(){

    var elementoListaFilme=document.getElementById("listaFilmes");
    elementoListaFilme.innerHTML='';

    for (i=0; i<listaFilmesFavoritos.length;i++){
        elementoListaFilme.innerHTML=
        
        `<a href="${listaTrailersFilmesFavoritos[i]}" target=_blank> 
        <img src="${listaFilmesFavoritos[i]}"> 
        </a>`;
    }
}

function limparCampo(){
    document.getElementById('filmes').value='';
    document.getElementById('trailer').value='';
     //serve para 'limpar' o campo de texto do input
}