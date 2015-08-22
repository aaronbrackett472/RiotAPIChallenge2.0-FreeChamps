(function(window, document, undefined) {
  var ChampionModel = {}; //this line has a semi-colon -tcj

  var api_key = 'b9f2effe-c90e-4633-b36b-5716684ccbac' //should these lines have semi-colons? -tcj
  var FREE_CHAMPS_URL= 'https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=true&api_key=' + api_key //should these lines have semi-colons? -tcj
  var CHALLENGER_URL = 'https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key' + api_key //should these lines have semi-colons? -tcj
  var MH_URL_1 = 'https://na.api.pvp.net/api/lol/na/v2.2/matchhistory/'
  var MH_URL_2 = '?championIds=' //should these lines have semi-colons? -tcj
  var MH_URL_3 = '&api_key=' + api_key //should these lines have semi-colons? -tcj
  var STATUS_OK = 200;


  ChampionModel.freeChamps = function(callback) {
    var getRequest = new XMLHttpsRequest();
    getRequest.addEventListener('load', function(event){
      if (getRequest.status != STATUS_OK){
        callback(getRequest.responseText);
      }
      else{
        var JSONPosts = getRequest.responseText;
        var parsedPosts = JSON.parse(JSONPosts);
        return callback(null, parsedPosts);
      }
    });
    getRequest.open('GET', FREE_CHAMPS_URL);
    getRequest.send();
  };

  ChampionModel.challengers = function(callback) {
    var getRequest = new XMLHttpsRequest();
    getRequest.addEventListener('load', function(event){
      if (getRequest.status != STATUS_OK){
        callback(getRequest.responseText);
      }
      else{
        var JSONPosts = getRequest.responseText;
        var parsedPosts = JSON.parse(JSONPosts);
        return callback(null, parsedPosts);
      }
    });
    getRequest.open('GET', CHALLENGER_URL);
    getRequest.send();
  };

  ChampionModel.matchHistory = function(callback, summonerID, champID) {
    var getRequest = new XMLHttpsRequest();
    getRequest.addEventListener('load', function(event){
      if (getRequest.status != STATUS_OK){
        callback(getRequest.responseText);
      }
      else{
        var JSONPosts = getRequest.responseText;
        var parsedPosts = JSON.parse(JSONPosts);
        return callback(null, parsedPosts);
      }
    });
    getRequest.open('GET', MH_URL_1 + summonerID + MH_URL_2 + champID + MH_URL_3);
    getRequest.send();
  };

 

  window.PostModel = PostModel;
})(this, this.document);