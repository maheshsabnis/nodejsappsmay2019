var utility = require('./modulelogic');
var r = require('./newfile');

var str = "Node.js Training";

console.log('Length of ' + str + " is = " + utility.getLength(str));
console.log('Upper Case ' + utility.changeCase(str, "U"));
console.log('Lower Case ' + utility.changeCase(str, "L"));
console.log('Reverse ' + r.reverse(str));