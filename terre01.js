// EX 1 - Program Name

// Recover Path of File with process.argv
var pathOfFile = process.argv[1];
// console.log(pathOfFile)

var finalResult = "";

// Recover lenght of string
var lenghtS = 0;
lenghtS = lenghtOfString(pathOfFile);
//console.log(lenghtS)


// Example var i = 88; while 88 > 0 ; than 88 -1
for (var i = lenghtS - 1; i >= 0; i--) {

    var char = pathOfFile[i];
    // Variable to know the number of characters to display before the first slash
    var afterLastSlash = i;
    console.log(afterLastSlash)
    

    if (char == "/"){
        
        // Delete / char for display file name
        afterLastSlash += 1;
        //console.log(afterLastSlash)

        // x vaut 88  ; 88 > 78 ; x-1
        for(var x = lenghtS; x > afterLastSlash; afterLastSlash++ ){

            finalResult += pathOfFile[afterLastSlash];
        
        }

        break;

    } 
    
    //console.log(char)


}
console.log(finalResult)


var stringResult;
function lenghtOfString(string) {
  
    var numberOfChar = 0;

    for (var i = 0; string[i] != undefined; i++){

    numberOfChar++;

    }

    return numberOfChar;

}

