var https = require("https");
var getRepo = function(username, callback){


	var options = {
		host: 'api.github.com',
		path: '/users/' + username + '/repos',
		method: 'GET'
	};

	var req = https.request(options, function(res){
		console.log(res.statusCode);

		var output ="";
		res.on("data", function(d){
			output += d.toString("UTF-8");
		});

		res.on("end", function(){
			var repos = JSON.parse(output);
			repos.forEach(function(repo){
				console.log(repo.name);
			})
		})
	})

	req.end();
}

exports.gitRepo = getRepo;