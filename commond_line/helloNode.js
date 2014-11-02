var os = require("os");
var my_module = require("./my_module");

var msg = "hi there from" + os.type() +  " running " + process.version;

// console.log(msg); 
console.log(my_module.data);