var fs = require("fs");
var html = fs.readFileSync("index.html", "UTF-8");
fs.writeFile("data.html", "dummy text", "UTF-8", function(error){
	console.log(error);
});
fs.watchFile("watch.html", function(current, old){
	fs.readFile("watch.html", "UTF-8", function(error, data){
		console.log(data);
	});
});