class APIDriver{
    APIDriver(res,coches,parseString,objectDriver,objectDriverAll){
        var self = this;
        parseString(coches.data, function(err, result) {
          self.events = result;
  
          
          for (var i = 0; i < result.MRData.DriverTable[0].Driver.length; i++) {
            objectDriver = {
              id: result.MRData.DriverTable[0].Driver[i].$.driverId,
              name: result.MRData.DriverTable[0].Driver[i].GivenName[0]
            };
  
            objectDriver.name +=
              " " + result.MRData.DriverTable[0].Driver[i].FamilyName[0];
              objectDriverAll.push(objectDriver);
          }
          
        });
    }
}

module.exports = APIDriver;