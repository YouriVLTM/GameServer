const Gamess = require('./note.games.js');
const Users = require('./note.users.js');

// Create and Save a new name
function getMaps(data) {

  var game = Gamess.getGame(data);
  return game.getattribute();

};
exports.getMaps = getMaps;
