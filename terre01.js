// EX 1 - Program Name

// Recover Path of File with process.argv
var pathOfFile = process.argv[1];


var char = pathOfFile[0];
var stringResult = char;
var numberOfChar = 0;


for (var i = 1; pathOfFile[i] != undefined; i++){
    
    char = pathOfFile[i];
    
    stringResult = stringResult + char;
    numberOfChar++;

}
console.log(stringResult);
console.log(numberOfChar); 