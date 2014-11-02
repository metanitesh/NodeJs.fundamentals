
/**
 * Module dependencies.
 */

var express = require('express'),
http = require("http");

var app = express();

app.configure(function(){
  console.log("in config")
  app.use(express.bodyParser());
})

app.get("/", function(req, res){
  res.send("hello express");
});

app.get("/hi", function(req, res){
  res.send("<b>say hi</b>");
});

app.get("/user/:userId", function(req, res){
  res.send(req.params.userId);
});

app.post("/user", function(req, res){
  console.log(req.body);
  res.send("adding some val" + req.body.username);
})


app.put("/user", function(req, res){
  console.log("put")
  res.send(req.body);
})

app.delete("/user", function(req, res){
  console.log("delete")
  res.send(req.body);

})

http.createServer(app).listen(3000, function(){

  console.log("Express server listening on port " + 3000);
});
