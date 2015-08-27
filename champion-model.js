var api_key = 'b9f2effe-c90e-4633-b36b-5716684ccbac' //should these lines have semi-colons? -tcj
var FREE_CHAMPS_URL= 'https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=true&api_key=' + api_key //should these lines have semi-colons? -tcj
var CHALLENGER_URL = 'https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key' + api_key //should these lines have semi-colons? -tcj
var MH_URL_1 = 'https://na.api.pvp.net/api/lol/na/v2.2/matchhistory/'
var MH_URL_2 = '?championIds=' //should these lines have semi-colons? -tcj
var MH_URL_3 = '&api_key=' + api_key //should these lines have semi-colons? -tcj
var ITEM_URL_1 = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item/'
var ITEM_URL_2 = '?itemData=image&api_key=' + api_key
var CHAMP_URL_1 = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/'
var CHAMP_URL_2 = '?api_key=0fb0440c-84e2-41b1-8a11-2fc3ccc7a1ea'
var STATUS_OK = 200;
var SERVER_URL = "http://52.2.103.61/"
var XMLHttpRequest = require('xhr2')
var fs = require('fs')

var i = 0
console.log("got here"+i)
i++

exports.freeChamps = function(callback) {
  console.log("got here"+i + "free champs")
  i++

  var getRequest = new XMLHttpRequest();
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
},

exports.challengers = function(callback) {
  console.log("got here"+i + "challengers")
  i++

  var getRequest = new XMLHttpRequest();
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
},

exports.matchHistory = function(callback, summonerID, champID) {
  console.log("got here"+i + "matchhistory")
  i++

  var getRequest = new XMLHttpRequest();
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
},

exports.getItem = function(callback, itemID){
  console.log("got here"+i)
  i++

  var getRequest = new XMLHttpRequest();
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
  getRequest.open('GET', ITEM_URL_1 + itemID + ITEM_URL_2);
  getRequest.send();
},

exports.getChamp = function(callback, champID){
  console.log("got here"+i)
  i++

  var getRequest = new XMLHttpRequest();
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
  getRequest.open('GET', CHAMP_URL_1 + champID + CHAMP_URL_2);
  getRequest.send();
},

exports.postFatJSON = function(fatJSON) {
  console.log("got here"+i)
  i++

  fs.writeFile('FatJSON.json', fatJSON)
}

