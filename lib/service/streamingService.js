var io = require('socket.io');

exports.start = function (server) {
	io = io.listen(server);
	//io.set('log level', 1);
	io.set("transports", ["xhr-polling"]);
	io.disable('heartbeats');


	io.sockets.on('connection', function (socket) {
	  console.log(socket);

	  socket.on('disconnect', function () {
	    console.log('User disconnected');
	  });

	  socket.on('data', function (data) {
	    socket.broadcast.emit('data', data);
	  });

	});
	
}
