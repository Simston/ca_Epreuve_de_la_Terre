// Puissance d'un nombre

// Variable for verify all args
var args = process.argv;
var booleanVerif = verifyNumberOfArgument(args);

if(booleanVerif){

    var base = process.argv[2];
    var exposant = process.argv[3];
    var result = 1;

    for (var i = 0; i < exposant; i++) {

        result *= base;
        
    }

    if(base =="1" && exposant =="1") {

        console.log(result)

    }else if(result != 1){

        console.log(result);
       
    }else{

        console.log('Veuillez entrer une base et un exposant positif')
    }
}


// Function to check if there is indeed a single argument passed
function verifyNumberOfArgument(arg){

    //Count the number of Args passed in the command user's, and then iterate over the process array
    var countArgs = lenghtOf(arg);

    if ( countArgs != 4) {
    
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