// Inverser une chaîne

// Variable for verify all args
var args = process.argv;
var booleanVerif = verifyNumberOfArgument(args);

if(booleanVerif){

    // Recover first argument from command line
    var string = process.argv[2];
    var lenghtOfstring = lenghtOf(string);
    var inversedString = [];

    for(var i = lenghtOfstring - 1; i >= 0; i--) {

        inversedString += string[i];
    
    }

    // Final Result
    console.log(inversedString)

}else{

    console.log("Veuillez entrer une chaîne de caractère entre guillemets simples ''")

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
  
    var count = 0;

    for (var i = 0; data[i] != undefined; i++){
      
    count++;

    }

    return count;

}