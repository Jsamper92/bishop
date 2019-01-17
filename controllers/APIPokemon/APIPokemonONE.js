class APIPokemonONE{
    APIPokemonONE(res,pokemonId,id,objectPokemon,objectPokemonOne){
        
         objectPokemon = {
            id: id,
            name: pokemonId.data.forms[0].name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
          };
  
          objectPokemonOne.push(objectPokemon)
    }
}
module.exports = APIPokemonONE;