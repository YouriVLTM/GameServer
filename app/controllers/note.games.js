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





/*
// Find a single note with a noteId
exports.findOne = (req, res) => {
  Note.findById(req.params.noteId)
      .then(note => {
          if(!note) {
              return res.status(404).send({
                  message: "Note not found with id " + req.params.noteId
              });
          }
          res.send(note);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Note not found with id " + req.params.noteId
              });
          }
          return res.status(500).send({
              message: "Error retrieving note with id " + req.params.noteId
          });
      });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  // Validate Request
      if(!req.body.content) {
          return res.status(400).send({
              message: "Note content can not be empty"
          });
      }

      // Find note and update it with the request body
      Note.findByIdAndUpdate(req.params.noteId, {
          title: req.body.title || "Untitled Note",
          content: req.body.content
      }, {new: true})
      .then(note => {
          if(!note) {
              return res.status(404).send({
                  message: "Note not found with id " + req.params.noteId
              });
          }
          res.send(note);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Note not found with id " + req.params.noteId
              });
          }
          return res.status(500).send({
              message: "Error updating note with id " + req.params.noteId
          });
      });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

  Note.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });

};

*/
