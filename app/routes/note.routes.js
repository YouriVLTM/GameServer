/**
 * Routes
 */
module.exports = (app,io) => {
    const gamess = require('../controllers/note.games.js');
    const game = require('../controllers/note.game.js');
    const maps = require('../controllers/note.maps.js');
    const users = require('../controllers/note.users.js');

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
        /******/
        socket.on( 'games.createNewGame', function( data ) {

          try {
            gamess.createNewGame(data);
          } catch (e) {
            socket.emit('games.error', { data: e.message });
          }

      	});

        socket.on( 'games.getAll', function( data ) {

         try {
           receive = gamess.getAll();
           socket.emit('games.getAll', { data: receive });
         } catch (e) {
           socket.emit('games.error', { data: e.message });
         }
       });

       socket.on( 'games.getGame', function( data ) {

        try {
          receive = gamess.getGame(data);
          socket.emit('games.getGame', { data: receive });
        } catch (e) {
          socket.emit('games.error', { data: e.message });
        }
      });


      socket.on( 'games.setPlaceId', function( data ) {

        try {
          gamess.setPlaceId(data);
        } catch (e) {
          socket.emit('games.error', { data: e.message });
        }

      });

      socket.on( 'games.getPlaceId', function( data ) {

        try {
          receive = gamess.getPlaceId(data);
          socket.emit('games.getPlaceId', { data: receive });
        } catch (e) {
          socket.emit('games.error', { data: e.message });
        }

      });

      socket.on( 'games.getPlaceName', function( data ) {

        try {
          receive = gamess.getPlaceName(data);
          socket.emit('games.getPlaceName', { data: receive });
        } catch (e) {
          socket.emit('games.error', { data: e.message });
        }

      });

      socket.on( 'games.getAllPlace', function( data ) {
      try {
        receive = gamess.getAllPlace();
        socket.emit('games.getAllPlace', { data: receive });
      } catch (e) {
        socket.emit('games.error', { data: e.message });
      }

      });

      /********/
      /*Game**/
      /********/

       socket.on( 'game.setName', function( data ) {

        try {
          game.setName(data);
          //socket.emit('game.setName', { data: receive });
        } catch (e) {
          socket.emit('games.error', { data: e.message });
        }
      });

      socket.on( 'game.getCountAgent', function( data ) {

       try {
         receive = game.getCountAgent(data);
         socket.emit('game.getCountAgent', { data: receive });
       } catch (e) {
         socket.emit('games.error', { data: e.message });
       }
     });

     socket.on( 'game.getCountPrisoner', function( data ) {

      try {
        receive = game.getCountPrisoner(data);
        socket.emit('game.getCountPrisoner', { data: receive });
      } catch (e) {
        socket.emit('games.error', { data: e.message });
      }
    });





    socket.on( 'game.createNewUser', function( data ) {

     try {
       receive = game.createNewUser(data);
       socket.emit('game.getUser', { data: receive });
     } catch (e) {
       socket.emit('games.error', { data: e.message });
     }
    });


      socket.on( 'game.createNewAgent', function( data ) {

       try {
         game.createNewAgent(data);
         //socket.emit('game.createNewAgent', { data: receive });
       } catch (e) {
         socket.emit('games.error', { data: e.message });
       }
     });

     socket.on( 'game.createNewPrisoner', function( data ) {

      try {
        game.createNewPrisoner(data);
        //socket.emit('game.createNewAgent', { data: receive });
      } catch (e) {
        socket.emit('games.error', { data: e.message });
      }
    });

    socket.on( 'game.goToMaps', function( data ) {

     try {
       receive = game.goToMaps(data);
       socket.emit('game.goToMaps', { data: receive });
     } catch (e) {
       socket.emit('games.error', { data: e.message });
     }
   });

   socket.on( 'game.getAllUserLocation', function( data ) {

    try {
      receive = game.getAllUserLocation(data);
      socket.emit('game.getAllUserLocation', { data: receive });
    } catch (e) {
      socket.emit('games.error', { data: e.message });
    }
  });

  socket.on( 'game.getMessages', function( data ) {
   try {
     //console.log("messs", data);
     receive = game.getMessages(data);
     socket.emit('game.getMessages', { data: receive });
   } catch (e) {
     socket.emit('games.error', { data: e.message });
   }
 });


 socket.on( 'game.getMessage', function( data ) {
  try {
    //console.log("messs", data);
    receive = game.getMessage(data);
    socket.emit('game.getMessage', { data: receive });
  } catch (e) {
    socket.emit('games.error', { data: e.message });
  }
});


 socket.on( 'game.setMessage', function( data ) {
  try {
    receive = game.setMessage(data);
    socket.emit('game.setMessage', { data: receive });
  } catch (e) {
    socket.emit('games.error', { data: e.message });
  }
});

   /********/
   /*Maps**/
   /********/
   socket.on( 'maps.getMaps', function( data ) {

    try {
      receive = maps.getMaps(data);
      socket.emit('maps.getMaps', { data: receive });
    } catch (e) {
      socket.emit('maps.error', { data: e.message });
    }
  });

  socket.on( 'maps.getDeviceMarker', function( data ) {

   try {
     receive = users.getUser(data);
     socket.emit('maps.getDeviceMarker', { data: receive });
   } catch (e) {
     socket.emit('maps.error', { data: e.message });
   }
 });



  /********/
  /*Users**/
  /********/
  socket.on( 'user.loseShot', function( data ) {
   try {
     users.loseShot(data);
   } catch (e) {
     socket.emit('user.error', { data: e.message });
   }
  });

  socket.on( 'user.hitShot', function( data ) {
   try {
     users.hitShot(data);
   } catch (e) {
     socket.emit('user.error', { data: e.message });
   }
  });

  socket.on( 'user.setLocation', function( data ) {
   try {
     users.setLocation(data);
   } catch (e) {
     socket.emit('user.error', { data: e.message });
   }
  });

  socket.on( 'user.addAttribute', function( data ) {
   try {
     var price = users.addAttribute(data);
     socket.emit('user.getPrice', { data: price });
   } catch (e) {
     console.log(e);
     socket.emit('user.error', { data: e.message });
   }
  });

  socket.on( 'user.canceledAttribute', function( data ) {
   try {
     users.canceledAttribute(data);
   } catch (e) {
     socket.emit('user.error', { data: e.message });
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
