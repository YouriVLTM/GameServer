const Agent = require('../models/note.agent.js');
const Prisoner = require('../models/note.prisoner.js');
const Location = require('../models/note.location.js');
const Gamess = require('./note.games.js');


// Create and Save a new name
function setName(data) {
  console.log("Set name",data);

  var game = Gamess.getGame(data);
  game.setName(data.name);

};
exports.setName = setName;

function createNewAgent(data) {
  console.log("New Agent",data);

  var game = Gamess.findAll(data.gameId);
  var newLocation = new Location();
  var newAgent = new Agent(data.name);
  newAgent.setLocation(newLocation);
  game.addUser(newAgent);

};
exports.createNewAgent = createNewAgent;

function createNewPrisoner(data) {
  console.log("New Prisoner",data);

  var game = Gamess.findAll(data.gameId);
  var newLocation = new Location();
  var newPrisoner = new Prisoner(data.name);
  newPrisoner.setLocation(newLocation);
  game.addUser(newPrisoner);

};
exports.createNewPrisoner = createNewPrisoner;
