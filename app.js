var openSocket = require("socket.io-client")
const socket = openSocket("http://localhost:3787");

  socket.on('connect', function(){
    console.log("socket-conectado")
    socket.on('*', function(data1, data2){
      console.log("From-Socket", data1, data2)
    });
  });

  const obj ={
    action: 'login',
    UserId: 'prueba',
    DeviceId: 'HH20',
    idCEDIS: 'CEDIS'
  }

  socket.emit('connected', obj)

  socket.on('messages', function(data) {
  	console.log("messages->", data);
  });