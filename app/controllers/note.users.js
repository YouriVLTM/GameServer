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
console.log(data);
// change price
var price = Game.getAttributePrice(data);
user.addPrice(price);

//Message
Game.addMessage(data);

return user.getPrice();

};
exports.addAttribute = addAttribute;

function hitShot(data) {
var user = getUser(data);

if(user.getShot()> 0){

  data.detectUsers.forEach(function(detectuser){
    us = getUser({'gameId':data.gameId,'userId':detectuser.id});
    console.log(us);
    user.loseShot();
    us.hitShot();
  });

}else{
  throw new Error("Target view: Kogels op");
}


};
exports.hitShot = hitShot;


function loseShot(data) {
var user = getUser(data);
user.loseShot();


};
exports.loseShot = loseShot;
