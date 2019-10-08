
const express = require('express');
const bodyParser = require('body-parser');
global.uuid = require('uuid');

// create express app
const app = express();
const https = require('https');
const fs = require('fs');



var server = https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'Vriend28'
}, app)

var io = require('socket.io').listen(server);

/*
console.log("connection");
io.sockets.on('connection', function(socket){
   console.log("A person connected!");

   socket.on( 'message', function( data ) {
		console.log( 'Message received ', data );
    socket.emit('message', { hello: 'world' });

	});

  socket.on('disconnect', function() {
      console.log('Got disconnect!');
   });


})

*/


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//socket json file
app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header("Access-Control-Allow-Headers", "Content-Type");
       res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
       next();
   });

// define a simple route
app.get('/', (req, res) => {
  res.json({"message": "Welwxome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
app.get('/games', (req, res) => {
  res.json({"message": games});
});

app.get('/socket.io.js', (req, res) => {
  res.json({"message": "Welwxome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});



require('./app/routes/note.routes.js')(app,io);


// Spel starten
global.games = new Array();

//test spel
const Game = require('./app/models/note.game.js');
var newGame = new Game("spel1");
games.push(newGame);
var newGame = new Game("spel2");
games.push(newGame);
console.log(games);

server.listen(3000);
