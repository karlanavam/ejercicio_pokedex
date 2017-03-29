function Pokemon(nombre,color,puntosAtaque){
 this.nombre = nombre;
 this.color = color;
 this.nivelDeAmistad = 0;
 this.vida = 100;
 this.puntosAtaque = puntosAtaque;

  /* this.saludar = function(){
   console.log("Hola, me llamo " + this.nombre)
 }; */

 this.pelear = function(pokemonObjeto){
   pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
 }
}

/*  this.beber = function(tipoAlcohol){
   if(tipoAlcohol == "chelas"){
     this.nivelDeAmistad += 80
   }
   else if (tipoAlcohol == "vodka") {
     this.nivelDeAmistad += 10
   }
 };
} */


var pokemons = [];

function crearPokemon () {
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");

  var pokemon = new Pokemon (nombrePokemon.value, colorPokemon.value, parseInt(puntosAtaque.value))
  pokemons.push(pokemon)
  mostrarPokemons();
  mostrarPokemons2();
  borrar();
}


function mostrarPokemons() {
 var nombrePokemon = document.getElementById("nombrePokemon");

   var lista = document.createElement("option");
   var pokemonesCreados = document.createTextNode(nombrePokemon.value);
   lista.appendChild(pokemonesCreados);
   var listaPokemons = document.getElementById("pokemones").appendChild(lista);
}

function mostrarPokemons2 () {
 var nombrePokemon = document.getElementById("nombrePokemon");

   var lista = document.createElement("option");
   var pokemonesCreados = document.createTextNode(nombrePokemon.value);
   lista.appendChild(pokemonesCreados);
   var listaPokemons = document.getElementById("pokemones2").appendChild(lista);
}


  function borrar () {
     var stringVacio = "";
     document.getElementById("nombrePokemon").value = stringVacio;
     document.getElementById("colorPokemon").value = stringVacio;
     document.getElementById("puntosAtaque").value = stringVacio;
  }
/* function mostrarPokemons () {
 var listaPokemons = document.getElementById("listaPokemons");
 var lista = document.createElement("ul");

 pokemons.forEach(function(pokemon) {
  var elemento = document.createElement("li");

  elemento.innerText = pokemon.nombre + pokemon.color + pokemon.puntosAtaque;
  lista.appendChild(elemento  )

})
 listaPokemons.appendChild(lista);
} */

function peleaPokemon() {
  /*var select = document.getElementById("pokemones");*/
 var select = document.getElementById("pokemones").value;
 console.log(select)
  var option = document.getElementById("pokemones2").value;
  console.log(option)

  for (var i = 0; i > pokemons.lenght -1; i++) {
    return pokemons[i].select.value;
    console.log();

  };

}

