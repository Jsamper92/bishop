class APIClashapiONE{
    APIClashapiONE(res,cardsUnit,objectCards,objectCardOne){
        
        objectCards = {
            id: cardsUnit.data._id,
            name: cardsUnit.data.idName,
            image: `http://www.clashapi.xyz/images/cards/${
              cardsUnit.data.idName
            }.png`
          };
          objectCardOne.push(objectCards)
        

        
    }
}
module.exports = APIClashapiONE;