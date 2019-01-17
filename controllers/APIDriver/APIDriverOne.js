class APIDriverONE{
    APIDriverONE(res,corredor,id,parseString,objectDriver,objectDriverOne){
        var self = this;
        parseString(corredor.data,function(err,result){
          self.events = result;
          objectDriver = {
            id: result.MRData.DriverTable[0].Driver[0].$.driverId,
            name: result.MRData.DriverTable[0].Driver[0].GivenName[0] +" "+ result.MRData.DriverTable[0].Driver[0].FamilyName[0],
            image: result.MRData.DriverTable[0].Driver[0].$.url
          }
          objectDriverOne.push(objectDriver)
        })
    }
}

module.exports = APIDriverONE;