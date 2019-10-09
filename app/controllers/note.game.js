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


function getCountAgent(data) {
  console.log("Set count agent",data);

  var game = Gamess.getGame(data);
  console.log("Get count agent");
  return game.getCountAgent();

};
exports.getCountAgent = getCountAgent;



function getCountPrisoner(data) {
  console.log("Set count Prisoner",data);
  var game = Gamess.getGame(data);
  return game.getCountPrisoner();

};
exports.getCountPrisoner = getCountPrisoner;

function createNewAgent(data) {
  console.log("New Agent",data);

  var game = Gamess.getGame(data);
  var newLocation = new Location();
  var newAgent = new Agent(data.name);
  newAgent.setLocation(newLocation);
  game.addUser(newAgent);

  return newAgent;

};
exports.createNewAgent = createNewAgent;

function createNewPrisoner(data) {
  console.log("New Prisoner",data);

  var game = Gamess.getGame(data);
  var newLocation = new Location();
  var newPrisoner = new Prisoner(data.name);
  newPrisoner.setLocation(newLocation);
  game.addUser(newPrisoner);

  return newPrisoner;

};
exports.createNewPrisoner = createNewPrisoner;

function createNewUser(data) {
  console.log("Creat new user",data);
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
  console.log("Creat new user",data);
  var game = Gamess.getGame(data);
  return game.goToMaps();

};
exports.goToMaps = goToMaps;
