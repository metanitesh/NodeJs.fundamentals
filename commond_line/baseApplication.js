
var rl = require("readline");

var prompt = rl.createInterface(process.stdin, process.stdout);


prompt.question("how many days to learn node", function(days){
	if(days<4){
		console.log("too ambitious");
	}else{
		console.log("sure");8
	}
	process.exit();
});