var express = require('express'),
http = require("http");

var app = express();

var data = [{
  "name": "nitesh",
}, {
  "name" : "ashish"
}]

app.configure(function(){
  console.log("in config")
  app.use(express.bodyParser());
})

app.get("/", function(req, res){
  res.render("home.ejs", {user : data});
})

http.createServer(app).listen(3000, function(){

  console.log("Express server listening on port " + 3000);
});
