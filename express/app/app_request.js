var express = require('express'),
http = require("http");
var app = express();

app.get("/user/:name?", function(req, res){
  // res.send(req.get("user-agent"));
  // res.send(req.accepted);
  // res.send(req.accepts(["html", "text"]));
  // res.send(req.acceptedCharsets);
  // res.send(req.params.name);
  // res.send(req.param("name", "default"));
  // res.send(req.protocol);
  // res.send(req.ip);
})

http.createServer(app).listen(3000, function(){

  console.log("Express server listening on port " + 3000);
});
