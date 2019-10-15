const Gamess = require('./note.games.js');
const Game = require('./note.game.js');


function getUser(data){

  var game = Gamess.getGame(data);
  var users = game.users;

  for(user of users) {
    if(user.id == data.userId){
      return user;
    }
  }
  // error
  throw new Error('User isnt found');
}
exports.getUser = getUser;

function setLocation(data) {
var user = getUser(data);

user.setLocation(data.location);

// View messge

};
exports.setLocation = setLocation;

function canceledAttribute(data) {
var user = getUser(data);
user.addCancele1tAttribute(data.attributeId);

};
exports.canceledAttribute = canceledAttribute;


function addAttribute(data) {
var user = getUser(data);
user.addAttribute(data.attributeId);

//Message
Game.addMessage(data);

};
exports.addAttribute = addAttribute;


function loseShot(data) {
var user = getUser(data);
user.loseShot();


};
exports.loseShot = loseShot;
