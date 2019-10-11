const Agent = require('../models/note.agent.js');
const Prisoner = require('../models/note.prisoner.js');
const Location = require('../models/note.location.js');
const Gamess = require('./note.games.js');


// Create and Save a new name
function setName(data) {

  var game = Gamess.getGame(data);
  game.setName(data.name);

};
exports.setName = setName;


function getCountAgent(data) {

  var game = Gamess.getGame(data);
  return game.getCountAgent();

};
exports.getCountAgent = getCountAgent;



function getCountPrisoner(data) {
  var game = Gamess.getGame(data);
  return game.getCountPrisoner();

};
exports.getCountPrisoner = getCountPrisoner;

function createNewAgent(data) {

  var game = Gamess.getGame(data);
  var newLocation = new Location();
  var newAgent = new Agent(data.name);
  newAgent.setLocation(newLocation);
  game.addUser(newAgent);

  return newAgent;

};
exports.createNewAgent = createNewAgent;

function createNewPrisoner(data) {

  var game = Gamess.getGame(data);
  var newLocation = new Location();
  var newPrisoner = new Prisoner(data.name);
  newPrisoner.setLocation(newLocation);
  game.addUser(newPrisoner);

  return newPrisoner;

};
exports.createNewPrisoner = createNewPrisoner;

function createNewUser(data) {
  if(data.personalitie == "Agent"){
    return this.createNewAgent(data);
  }else if(data.personalitie == "Prisoner"){
    return this.createNewPrisoner(data);
  }else{
    throw new Error("User function din't exist");
  }

};
exports.createNewUser = createNewUser;



function goToMaps(data) {
  var game = Gamess.getGame(data);
  return game.goToMaps();

};
exports.goToMaps = goToMaps;


function getAllUserLocation(data) {
  var game = Gamess.getGame(data);

  return game.getUsers();

};
exports.getAllUserLocation = getAllUserLocation;
