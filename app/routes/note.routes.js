module.exports = (app,io) => {
    const gamess = require('../controllers/note.games.js');
    const game = require('../controllers/note.game.js');


    // Create a new Note
  /*  app.post('/games', games.create);
    app.get('/games', games.findAll);

    app.post('/game', game.create);

*/
    io.sockets.on('connection', function(socket){
       console.log("A person connected!");

         socket.on( 'games.test', function( data ) {
           console.log( 'Debug TEST ', data );
           socket.emit('games.test', { datas: 'helo' });

       });

         //Games
        socket.on( 'games.creatNewGame', function( data ) {
      		console.log( 'Message received ', data );
          try {
            gamess.creatNewGame(data);
          } catch (e) {
            socket.emit('games.error', { data: e.message });
          }

      	});

        socket.on( 'games.findAll', function( data ) {
         console.log( 'Message received ', data );
         receive = gamess.findAll();
         socket.emit('games.findAll', { data: receive });
       });

       // Getter and setters

       socket.on( 'games.setName', function( data ) {
        console.log( 'Message received ', data );
        receive = game.setName(data);
        socket.emit('games.findAll', { data: receive });

      });

       socket.on( 'games.getLocation', function( data ) {
        console.log( 'Message received ', data );
        receive = gamess.getLocation(data);
        console.log(receive);
        socket.emit('games.getLocation', { data: receive });
      });

      socket.on( 'games.getLocationName', function( data ) {
       console.log( 'Message received ', data );
       receive = gamess.getLocationName(data);
       console.log(receive);
       socket.emit('games.getLocationName', { data: receive });
     });

      socket.on( 'games.setLocation', function( data ) {
       console.log( 'Message received ', data );
       gamess.setLocation(data);
     });

     socket.on( 'games.getAllLocation', function( data ) {
      console.log( 'Message received ' );
      //gamess.setLocation(data);
      receive = gamess.getAllLocation();
      socket.emit('games.getAllLocation', { data: receive });
    });


    socket.on( 'games.startGame', function( data ) {
     console.log( 'Message received ', data );
     receive = gamess.findGame(data.gameId);
     receive.setActive(true);
     socket.emit('games.startGame', { data: receive });

   });









        socket.on('disconnect', function() {
            console.log('Got disconnect!');
         });


    })



/*
    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);

    */
}
