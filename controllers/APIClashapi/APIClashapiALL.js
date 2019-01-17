class APIClashapi{
    APIClashapi(res,cards,objectCards,objectAllCards){
       
      for (var i = 0; i < cards.data.length; i++) {
        objectCards = {
          id: cards.data[i]._id,
          name: cards.data[i].name
        };
        objectAllCards.push(objectCards);
      }
      
    }
}

module.exports = APIClashapi;