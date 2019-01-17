class APIPokemon{
    APIPokemon(res,pokemon,objectPokemon,objectAllPokemon){
       
        for (var i = 0; i < pokemon.data.results.length; i++) {
          objectPokemon = {
            id: i + 1,
            name: pokemon.data.results[i].name
          };
          objectAllPokemon.push(objectPokemon);
        }
        
    }
}

module.exports = APIPokemon;