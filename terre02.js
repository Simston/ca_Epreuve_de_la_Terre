// EX 2 - Afficheur d'arguments

// Recover process.argv array
var pathOfFile = process.argv;
var countArgs;

// if Argument one exist
if ( pathOfFile[2] != undefined) {

    //Count the number of Args passed in the command user's, and then iterate over the process array
    var countArgs = lenghtOf(pathOfFile);
    //The 2 first lines are ignored because it's path it's not about arguments
    var initPosition = 2;

    for (var i = countArgs; i > 2; i--) {

        console.log(pathOfFile[initPosition]);
        initPosition++
        
    }
}

//function for iterate over an array and return its lenght
function lenghtOf(array) {
  
    var lenghtResult = 0;

    for (var i = 0; array[i] != undefined; i++){

    lenghtResult++;

    }

    return lenghtResult;

}