
var http = require("http").createServer().listen(3000),
  io = require("socket.io").listen(http, {log: false}),
  clicks = 0; // click me baby, one more time.

io.sockets.on("connection", function(socket) {

  var ip = socket.handshake.address.address;
  console.log("Connection from " + ip);

  socket.on("clicked", function() {
    clicks += 1;
    console.log(" => click #" + clicks + " from " + ip);
    io.sockets.emit("update", clicks);
  });

  socket.emit("update", clicks);
});

