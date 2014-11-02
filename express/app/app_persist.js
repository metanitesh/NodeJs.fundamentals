var express = require('express'),
http = require("http");
var app = express();

app.configure(function(){
  app.use(express.cookieParser());
  app.use(express.session({secret : "this is secret"}))
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(function(req, res){
    res.send(404, "wooo 404");
  })
});




app.get("/name/clear", function(req, res){
    res.clearCookie("name").send("cookie removed");
})

app.get("/name/testError", function(req, res){
    res.clearCookie("name").send("cookie removed");
    next();
})


app.get("/name", function(req, res){
    res.send(req.cookies.name)
})

app.get("/name/:name", function(req, res){
    res.cookie("name", req.params.name).send("cookie set");
})


app.get("/user/:user", function(req, res){
  req.session.name = req.params.user;

  res.send("session is created" +  req.session.name);
})

app.get("/user", function(req, res){
  res.send(req.session.name);
})

http.createServer(app).listen(3000, function(){
  console.log("Express server listening on port " + 3000);
});
