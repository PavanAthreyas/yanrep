var fs = require('fs');

var oFileContent = fs.readFileSync(process.argv[1]);


var sString = oFileContent.toString();
var aArray = sString.split("\n");
var oCount = aArray.length;
console.log(oCount);