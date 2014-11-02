var express = require('express'),
http = require("http");

var app = express();


app.configure(function(){
	app.set("port", process.env.PORT || 3000);
	app.set("views", __dirname+"/views");
	app.set("view engine", "ejs");
	
	// app.set("view cahce", true);
	// app.enable("view chache"); -->disabled
	//strict route
	//case sensitive route

	/*middleweare --- inbetween req and route order senstive*/ 
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname+"/public"));
})


http.createServer(app).listen(3000, function(){

  console.log("Express server listening on port " + 3000);
});
