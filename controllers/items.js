const { Router } = require("express");
const axios = require("axios");
var parseString = require("xml2js").parseString;

const APIClasapi = require("./APIClashapi/APIClashapiALL");
const APIClashapiONE = require("./APIClashapi/APIClashapiONE");
const APIPokemon = require("./APIPokemon/APIPokemonALL");
const APIPokemonONE = require("./APIPokemon/APIPokemonONE");
const APIDriver = require("./APIDriver/APIDriverALL");
const APIDriverONE = require("./APIDriver/APIDriverOne");

const apipokemon = new APIPokemon();
const apipokemonone = new APIPokemonONE();
const apiclashapi = new APIClasapi();
const apiclashapione = new APIClashapiONE();
const apidriver = new APIDriver();
const apidriverone = new APIDriverONE();

let objectCards = {};
let objectAllCards = [];
let objectCardOne = []

let objectPokemon = {};
let objectAllPokemon = [];
let objectPokemonOne=[];
let allObjects=[]

let objectDriver = {};
let objectDriverAll = [];
let objectDriverOne = [];

module.exports = new Router()
  .get("/", (req, res) => {
    axios.get("http://www.clashapi.xyz/api/cards").then(cards => {
      apiclashapi.APIClashapi(res, cards, objectCards, objectAllCards);

      axios.get("http://pokeapi.co/api/v2/pokemon/").then(pokemon => {
        apipokemon.APIPokemon(res, pokemon, objectPokemon, objectAllPokemon);

        axios.get("http://ergast.com/api/f1/drivers/").then(coches => {
          apidriver.APIDriver(res, coches, parseString,objectDriver,objectDriverAll);
          allObjects.push(objectAllCards,objectAllPokemon,objectDriverAll)

            res.send(allObjects);
            allObjects.pop()
        });
      });
    });
  })
  .get("/:id", (req, res) => {
    let id = req.params.id;
    axios.get(`http://www.clashapi.xyz/api/cards/${id}`).then(cardsUnit => {
      apiclashapione.APIClashapiONE(res, cardsUnit, objectCards,objectCardOne);
        res.send(objectCardOne)
        objectCardOne.pop()
    }).catch(()=>{
      axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`).then(pokemonId => {
        apipokemonone.APIPokemonONE(res, pokemonId, id,objectPokemon,objectPokemonOne);
          res.send(objectPokemonOne)
          objectPokemonOne.pop()
      }).catch(()=>{
            axios.get(`http://ergast.com/api/f1/drivers/${id}`).then(corredor => {
                apidriverone.APIDriverONE(res, corredor,id, parseString,objectDriver,objectDriverOne);
                  res.send(objectDriverOne)
                  objectDriverOne.pop()
              });
        })
    })
  });


