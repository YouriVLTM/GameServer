const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

const server = https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'Vriend28'
});

var io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
    console.log('socket connected');

    socket.on('disconnect', function () {
        console.log('socket disconnected');
    });

    socket.emit('text', 'wow. such event. very real time.');
});
console.log("on");
server.listen(3000);
