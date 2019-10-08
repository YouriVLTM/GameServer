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

        /********/
        /*Games**/
        /********/
        socket.on( 'games.createNewGame', function( data ) {
      		console.log( 'Message received ', data );
          try {
            gamess.createNewGame(data);
          } catch (e) {
            socket.emit('games.error', { data: e.message });
          }

      	});

        socket.on( 'games.findAll', function( data ) {
         console.log( 'Message received ', data );
         try {
           receive = gamess.findAll();
           socket.emit('games.findAll', { data: receive });
         } catch (e) {
           socket.emit('games.error', { data: e.message });
         }
       });

       socket.on( 'games.getGame', function( data ) {
        console.log( 'Message received ', data );
        try {
          receive = gamess.getGame(data);
          socket.emit('games.getGame', { data: receive });
        } catch (e) {
          socket.emit('games.error', { data: e.message });
        }
      });


      socket.on( 'games.setPlaceId', function( data ) {
        console.log( 'Message received ', data );
        try {
          gamess.setPlaceId(data);
        } catch (e) {
          socket.emit('games.error', { data: e.message });
        }

      });

      socket.on( 'games.getPlaceId', function( data ) {
        console.log( 'Message received ', data );
        try {
          receive = gamess.getPlaceId(data);
          socket.emit('games.getPlaceId', { data: receive });
        } catch (e) {
          socket.emit('games.error', { data: e.message });
        }

      });

      socket.on( 'games.getPlaceName', function( data ) {
        console.log( 'Message received ', data );
        try {
          receive = gamess.getPlaceName(data);
          socket.emit('games.getPlaceName', { data: receive });
        } catch (e) {
          socket.emit('games.error', { data: e.message });
        }

      });

      socket.on( 'games.getAllPlace', function( data ) {
      console.log( 'Message received ' );
      try {
        receive = gamess.getAllPlace();
        socket.emit('games.getAllPlace', { data: receive });
      } catch (e) {
        socket.emit('games.error', { data: e.message });
      }

      });



/*
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

      */



s
      /********/
      /*Game**/
      /********/

       socket.on( 'game.setName', function( data ) {
        console.log( 'Message received ', data );
        try {
          game.setName(data);
          //socket.emit('game.setName', { data: receive });
        } catch (e) {
          socket.emit('games.error', { data: e.message });
        }
      });

      socket.on( 'game.createNewAgent', function( data ) {
       console.log( 'Message received ', data );
       try {
         game.createNewAgent(data);
         //socket.emit('game.createNewAgent', { data: receive });
       } catch (e) {
         socket.emit('games.error', { data: e.message });
       }
     });

     socket.on( 'game.createNewPrisoner', function( data ) {
      console.log( 'Message received ', data );
      try {
        game.createNewPrisoner(data);
        //socket.emit('game.createNewAgent', { data: receive });
      } catch (e) {
        socket.emit('games.error', { data: e.message });
      }
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
