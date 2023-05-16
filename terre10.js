// Nombre premier

// Variable for verify all args
const args = process.argv;
const booleanVerif = verifyNumberOfArgument(args);


if(booleanVerif) {

    var number = process.argv[2];
    var modulo;

    // We treat here the case of 0 and 1 which are not prime numbers
    if(number == 1 || number == 0) {

        console.log("Non, " + number + " n'est pas un nombre premier.")

    }else{

        for(var i = 2; (number - 1) > i; i++) {

            modulo = number % i;
            console.log(modulo)

            if(modulo == 0){

                console.log(number + " n'est pas un nombre premier");
                break;
            }else{

                console.log(number + " est un nombre premier");
                break;

            }
        }
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
