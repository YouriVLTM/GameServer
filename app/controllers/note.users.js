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
// check if price is more than
if(user.getPrice() > 1000){
  // Game over
  //throw new Error('Gameover', user.getPrice() + user.getName() + " heeft gewonnen!");
  //Message
  data.message.title = "Game Over";
  data.message.message = "<h2>Game Over</h2><p>" + user.getName() + " heeft gewonnen met " + user.getPrice() + " euro";
  data.message.readUsers = ['Agent','Prisoner','Admin'];
  data.message.buttonName = "Game Over";
  data.message.buttonUrl = "index.html";
}

//Message
Game.addMessage(data);

return user.getPrice();

};
exports.addAttribute = addAttribute;

function hitShot(data) {
var user = getUser(data);

if(user.getShot()> 0){
  if(!user.getDeath()){

    data.detectUsers.forEach(function(detectuser){
      console.log("Detectuser");
      us = getUser({'gameId':data.gameId,'userId':detectuser.id});
      console.log(us);
      user.loseShot();
      us.hitShot();


      console.log(data);
      if(us.getFunction() == "Agent"){
        data.message.title = "Shot";
        data.message.message = "<h2>Shot</h2><p>" + user.getName() + " heeft de agent " + us.getName() + " neergeschoten.</p><p>";
        data.message.readUsers = ['Agent','Prisoner','Admin'];
        //data.message.buttonName = "close";
        //data.message.buttonUrl = "#";
        Game.addMessage(data);
      }
      // game over
      if(us.getFunction() == "Prisoner"){
        data.message.title = "Game Over";
        data.message.message = "<h2>Game Over</h2><p>" + user.getName() + " heeft de prisoner " + us.getName() + " neergeschoten.</p><p>";
        data.message.readUsers = ['Agent','Prisoner','Admin'];
        data.message.buttonName = "Game Over";
        data.message.buttonUrl = "index.html";
        Game.addMessage(data);
      }


    });

  }else{
    throw new Error("Je bent dood");
  }

}else{
  throw new Error("Target view: Kogels op");
}


};
exports.hitShot = hitShot;


function loseShot(data) {
  var user = getUser(data);
if(!user.getDeath()){
    user.loseShot();
}else{
  throw new Error("Je bent dood");

}


};
exports.loseShot = loseShot;

function reloadShot(data) {
  var user = getUser(data);
  if(user.reloadShot()){
    return user.getShot();
  }
  return null;
};
exports.reloadShot = reloadShot;



function leave(data) {

var user = getUser(data);
console.log(user);
user.setLeave(true);


};
exports.leave = leave;
