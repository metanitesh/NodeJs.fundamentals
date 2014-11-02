var fs = require("fs");
var argv = require("optimist").argv;

var fileName = argv._[0];
var html = fs.readFileSync(fileName, "UTF-8");

console.log(html);