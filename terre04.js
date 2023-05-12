// Pair ou impair

var args = process.argv;
var booleanVerif = verifyNumberOfArgument(args);

// If the number of arguments sent is good
if ( booleanVerif ) {

    var data = process.argv[2];

    var result;
    // Using the modulo to know if it's even"pair" or odd"impair"
    result = data % 2

    // if 1 or -1 for negative numbers
    if (result === 1 || result === -1) {

        console.log("impair")

    }else if (result == 0 ) {

        console.log("pair")

    }else {
        console.log("Tu ne me la mettras pas à l'envers");
    }
}else{
    console.log("Tu ne me la mettras pas à l'envers");
}

// Function to check if there is indeed a single argument passed
function verifyNumberOfArgument(arg){

    //Count the number of Args passed in the command user's, and then iterate over the process array
    var countArgs = lenghtOf(arg);

    if ( countArgs > 3 || countArgs < 3) {
        return false;
    }else{
        return true;
    }
}

//function for iterate over a data and return its lenght
function lenghtOf(data) {
  
    var numberOfChar = 0;

    for (var i = 0; data[i] != undefined; i++){

    numberOfChar++;

    }

    return numberOfChar;

}