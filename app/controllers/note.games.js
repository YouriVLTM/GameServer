//const Note = require('../models/note.model.js');
const Game = require('../models/note.game.js');




// Create and Save a new Game
function createNewGame (data) {
  //console.log("Create a new game : ", data);
  var newGame = new Game(data.name);
  games.push(newGame);

};
exports.createNewGame = createNewGame;


// Find all games
function getAll() {
  return games;
};
exports.getAll = getAll;


function getGame(data){
  for(game of games) {
    if(game.id == data.gameId){
      return game;
    }
  }
  // error
  throw new Error('Game isnt found');
}
exports.getGame = getGame;


// set Place
function setPlaceId(data) {
  var game = getGame(data);
  game.setPlaceId(data.placeId);
};
exports.setPlaceId = setPlaceId;

// get
function getPlaceId(data) {
  var game = getGame(data);
  return game.getPlaceId();
};
exports.getPlaceId = getPlaceId;

function getPlaceName(data) {
  var game = getGame(data);
  return game.getPlaceName();
};
exports.getPlaceName = getPlaceName;

function getAllPlace() {
  return require("../models/note.maps.json");
};
exports.getAllPlace = getAllPlace;




exports.getLocation = function (data) {

  try {
    var game = findGame(data.gameId);
    return game.getLocation();
  } catch (err) {
    //console.log(err);
    return {'error': err.message};
  }


  //res.send(games);
};

exports.getLocationName = function (data) {
  //console.log("Get location name",data);
  // find

  //console.log("id", data.gameId);

  try {
    var game = findGame(data.gameId);
    return game.getLocationName();
  } catch (err) {
    //console.log(err);
    return {'error': err.message};
  }

  //res.send(games);
};

exports.setLocation = function (data) {
  //console.log("Set gamelocation",data);
  // find

  //console.log("id", data.gameId);
  var game = findGame(data.gameId);
  game.setLocation(data.locationId);

  //res.send(games);
};

exports.getAllLocation = function () {
  //console.log("Get all location");
  // find

  return require("../models/note.maps.json");

  //res.send(games);
};
