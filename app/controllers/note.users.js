const Gamess = require('./note.games.js');


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

user.location.setLocation(data.latlng);



};
exports.setLocation = setLocation;
