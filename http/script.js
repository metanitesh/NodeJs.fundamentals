var http = require("http");
var fs = require("fs");
var config = JSON.parse(fs.readFileSync("config.json", "UTF-8"));
console.log(config.port);
var server = http.createServer(function(req, res){
	var url = req.url.slice(1);
	(url === "" ) ? url ="index.html" : url = url;
	fs.readFile(url, "UTF-8", function(error, data){
		if(error){
			res.writeHead(404, {"Content-type": "text/html"});
			res.end("404 error Page not found");
		}else{
			res.writeHead(200, {"Content-type": "text/html"});
			res.end(data);
		}
	})
	
}).listen(config.port, config.host, function(){
	console.log("Server is running on" + config.host+ ":"+ config.port);
});



fs.watchFile("config.json", function(){
	console.log("in watch")
	var config = JSON.parse(fs.readFileSync("config.json", "UTF-8"));
	server.close();
	server.listen(config.port, config.host, function(){
		console.log("now Serever is running on" + config.host+ ":"+ config.port);
	});	

});