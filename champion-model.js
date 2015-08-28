var api_key = 'b9f2effe-c90e-4633-b36b-5716684ccbac' //should these lines have semi-colons? -tcj
var FREE_CHAMPS_URL= 'https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=true&api_key=' + api_key //should these lines have semi-colons? -tcj
var CHALLENGER_URL = 'https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=' + api_key //should these lines have semi-colons? -tcj
var MH_URL_1 = 'https://na.api.pvp.net/api/lol/na/v2.2/matchhistory/'
var MH_URL_2 = '&api_key=' + api_key //should these lines have semi-colons? -tcj
var ITEM_URL_1 = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item/'
var ITEM_URL_2 = '?itemData=image&api_key=' + api_key
var CHAMP_URL_1 = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/'
var CHAMP_URL_2 = '?api_key=0fb0440c-84e2-41b1-8a11-2fc3ccc7a1ea'
var VERSION_URL = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/versions?api_key=' + api_key
var STATUS_OK = 200;
var XMLHttpRequest = require('xhr2')
var fs = require('fs')

exports.freeChamps = function(callback) {
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
  var getRequest = new XMLHttpRequest();
  getRequest.addEventListener('load', function(event){
    if (getRequest.status != STATUS_OK){
      console.log(getRequest)
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

exports.matchHistory = function(callback, summonerID) {
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
  getRequest.open('GET', MH_URL_1 + summonerID + MH_URL_2);
  getRequest.send();
},

exports.getItem = function(callback, itemID){
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

exports.version = function(callback) {
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
  getRequest.open('GET', VERSION_URL);
  getRequest.send();
},

exports.postFatJSON = function(fatJSON) {
  fatJSON = JSON.stringify(fatJSON)
  fs.writeFile('FatJSON.json', fatJSON)
}

