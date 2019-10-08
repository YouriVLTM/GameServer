const Agent = require('../models/note.agent.js');
const Prisoner = require('../models/note.prisoner.js');
const Gamess = require('./note.games.js');


exports.setName = function (data) {
  console.log("Set name",data);
  // find
  var game = Gamess.findGame(data.gameId);
  game.setName(data.name);

  return Gamess.findAll();

  //res.send(games);
};


exports.create = (req, res) => {
  // creat a new user
  console.log("creat new User");
  // Validate request
      if(!req.body.name && !req.body.gameId && !req.body.function) {
          return res.status(400).send({
              message: "Note content can not be empty"
          });
      }

      game = games[req.body.gameId];

      if(req.body.function == "Agent"){
        var newAgent = new Agent(req.body.name);
        game.newUser(newAgent);
      }else if(req.body.function == "Prisoner"){
        var newPrisoner = new Prisoner(req.body.name);
        game.newUser(newPrisoner);
      }
      //console.log(game);
      // Make a new user
      console.log(games);

      res.send(games);
      // Save Note in the database
    /*note.save()
      .then(data => {
          res.send(data);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while creating the Note."
          });
      });
      */

};
