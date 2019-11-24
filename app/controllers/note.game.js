const Agent = require('../models/note.agent.js');
const Prisoner = require('../models/note.prisoner.js');
const Location = require('../models/note.location.js');
const Gamess = require('./note.games.js');
const User = require('./note.users.js');
const Message = require('../models/note.message.js');

// Create and Save a new name
function setName(data) {

  var game = Gamess.getGame(data);
  game.setName(data.name);

};
exports.setName = setName;

function setBasecamp(data) {
  var game = Gamess.getGame(data);
  if(data.user._function == "Prisoner"){
    console.log("add basecamp");
    game.addAttribute(data.user);
  }else if(data.user._function == "Agent"){
    game.addAttribute(data.user);
  }else{
    throw new Error("Geen basecamp");
  }

};
exports.setBasecamp = setBasecamp;



function getAttributePrice(data) {

  var game = Gamess.getGame(data);
  return game.getAttributePrice(data.attributeId);

};
exports.getAttributePrice = getAttributePrice;


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
  //var newLocation = new Location();
  var newAgent = new Agent(data.name);
  //newAgent.setLocation(newLocation);
  game.addUser(newAgent);

  return newAgent;

};
exports.createNewAgent = createNewAgent;

function createNewPrisoner(data) {

  var game = Gamess.getGame(data);
  //var newLocation = new Location();
  var newPrisoner = new Prisoner(data.name);
  //newPrisoner.setLocation(newLocation);
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


function getAllAgentLocation(data) {
  var game = Gamess.getGame(data);
  var userAgent = new Array();
for(user of game.getUsers()){
  if(user._function == "Agent"){
    userAgent.push(user)
  }
}

  return userAgent;

};
exports.getAllAgentLocation = getAllAgentLocation;

function getAllPrisonerLocation(data) {
  var game = Gamess.getGame(data);
  var userPrisoner = new Array();
for(user of game.getUsers()){
  if(user._function == "Prisoner"){
    userPrisoner.push(user)
  }
}

  return userPrisoner;

};
exports.getAllPrisonerLocation = getAllPrisonerLocation;


function addMessage(data) {
  var game = Gamess.getGame(data);
  var message = new Message(data.message.title,data.message.message);
  message.setButtonName(data.message.buttonName);
  message.setButtonUrl(data.message.buttonUrl);

console.log(message);
//Elke elemnent
data.message.readUsers.forEach(function(userId){
  if(userId == "Agent"){
      // neem alle functions
      var agents = game.getAllAgent();
        agents.forEach(function(agent){
        message.addReadUser(agent.id);
      });

  }else if(userId == "Prisoner" ){
    var prisoners = game.getAllPrisoner();

    prisoners.forEach(function(prisoner){
      message.addReadUser(prisoner.id);
    });

  }else if(userId == "Admin"){
      console.log("admin");
  }else{
    // kijken of het een Id is
    try {
      var us = User.getUser({"data": {"userId" :userId}} );
      message.addReadUser(us.getId());
    } catch (e) {
      //niks doen
      console.log("User bestaat wel niet");
    }


  }
});

game.addMessages(message);



};
exports.addMessage = addMessage;

function getMessage(data) {
var game = Gamess.getGame(data);
return game.getUserMessage(data.userId);

};
exports.getMessage = getMessage;


function getMessages(data) {
var game = Gamess.getGame(data);
return game.getUserMessages(data.userId);

};
exports.getMessages = getMessages;
