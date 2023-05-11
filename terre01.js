// EX 1 - Program Name

var finalResult = "";
// Recover Path of File with process.argv
var pathOfFile = process.argv[1];
// Recover lenght of string
var lenghtS = 0;
lenghtS = lenghtOf(pathOfFile);


//Just for me -- Example var i = 88; while 88 > 0 ; than 88 -1
for (var i = lenghtS - 1; i >= 0; i--) {

    var char = pathOfFile[i];

    // New Variable to know the number of characters to display before the first slash
    var afterLastSlash = i;
    
    if (char == "/"){
        
        // Delete / char for display file name
        afterLastSlash += 1;

        // For me -- Example -- x vaut 88  ; 88 > 78 ; x-1
        for(var x = lenghtS; x > afterLastSlash; afterLastSlash++ ){

            // final String after last Slash in $Path variable
            finalResult += pathOfFile[afterLastSlash];
        
        }

        // Strop the program
        break;

    } 
}
console.log(finalResult)

//function for iterate over an String and return its lenght
function lenghtOf(string) {
  
    var numberOfChar = 0;

    for (var i = 0; string[i] != undefined; i++){

    numberOfChar++;

    }

    return numberOfChar;

}

