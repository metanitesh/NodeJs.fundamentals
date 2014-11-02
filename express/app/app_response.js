var express = require('express'),
http = require("http");
var app = express();

app.get("/", function(req, res){
  //res.send(404, "body")
  // res.json({message: "something"}); //js object
  // res.type("image/png").send("this is pic");	
  // res.status(200);
  res.set("") //set header
  res.format({
  	html: function(){ res.send("<h1>just body</h1>")},
  	json: function(){ res.json({message: "body"})}
  })
})

app.get("/home",function(req, res){
	res.redirect("/");
})

http.createServer(app).listen(3000, function(){
  res.status(302);	
  console.log("Express server listening on port " + 3000);
});
