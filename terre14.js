// Trié ou pas

// Recover process.argv array
var arguments = process.argv;
var booleanVerif = verifyNumberOfArgument(arguments)

var trieOuPas;

// if the user has entered at least 2 arguments
if ( booleanVerif ) {

    //Count the number of Args passed in the command user's, and then iterate over the process array
    var countArgs = lenghtOf(arguments);
    //The 2 first lines are ignored because it's path it's not about arguments
    var initPosition = 2;

    var arg1;
    var previousArg;

    for (var i = countArgs -1; i > 2; i--) {

        initPosition++
        
        // conversion to number type, to verify that we are work with numbers
        arg1 = Number(arguments[initPosition]);
        previousArg = Number(arguments[initPosition -1])

        // verifying on the first argument
        if(isNaN(previousArg)){

            trieOuPas = "char"
            break;

        // here we verify type of argument and if argument one is not equal to argument 2
        }else if(isNaN(arg1) || arg1 == previousArg ){
            
            trieOuPas = "char"
            break;

        }else if( arg1 > previousArg){
          
            trieOuPas = "true";

        }else{
           
            trieOuPas = "false";
            break;
        }
       
        
    }

    if(trieOuPas == "char"){
        console.log("Erreur ! Veuillez vérifier les données envoyées au programme.");
    }else if(trieOuPas == "true"){
        console.log("Triée");
    }else{
        console.log("Pas triée !")
    }
}else{
    console.log("Veuillez entrer au minimum 2 valeurs.")
}

// Function to check if there is indeed a single argument passed
function verifyNumberOfArgument(arg){

    //Count the number of Args passed in the command user's, and then iterate over the process array
    var countArgs = lenghtOf(arg);

    // this counter can be modify if you want more or less arguments
    if ( countArgs < 4) {
    
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