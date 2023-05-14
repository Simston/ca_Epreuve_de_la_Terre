// Taille d'une chaîne

// Variable for verify all args
var args = process.argv;
var booleanVerif = verifyNumberOfArgument(args);

if(booleanVerif) {

    var numberArray = ["1","2","3","4","5","6","7","8","9"];

    // Recover first argument from command line
    var string = process.argv[2];
    var lenghtOfstring = lenghtOf(string);

    var booleanVerifContent;

    // A Loop for verify if have a number in data 
    for(var i = lenghtOfstring; i > 0; i--) {

        // verify in Number Array
        for(var n = 9; n >= 0; n--) {

            if ( string[i - 1] === numberArray[n - 1] ){
                
                booleanVerifContent = false;
               
            } else {

                booleanVerifContent = true;
            }

            if(booleanVerifContent == false){

                console.log('Le programme requiert une chaîne de caractère')
                // break to exit the first loop if you have a number in the data
                break;

            }            
        }

        if(booleanVerifContent == false){
             // break to exit the first loop if you have a number in the data
            break;
        }
        
        
    }
    
    if(booleanVerifContent == true) {
        console.log(lenghtOfstring)
    }
  
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