var io = require("socket.io");
var express = require("express");

var app = express().use(express.static("public"));

var app = app.listen(3000);
var chat_room = io.listen(app);

chat_room.sockets.on("connection", function(socket){
	console.log("connected a new socket");

	socket.on("disconnect", function(socket){
		console.log("disconnected");
	})

	socket.emit("fromServer", {message: "enter a server event"})

	socket.on("fromClient", function(data){
		chat_room.sockets.emit("chat", {message : data.message})
	})


})