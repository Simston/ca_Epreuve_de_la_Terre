// Trié ou pas

// Recover process.argv array
var arguments = process.argv;
var countArgs;
var triee;

// if Argument one exist
if ( arguments[2] != undefined) {

    //Count the number of Args passed in the command user's, and then iterate over the process array
    var countArgs = lenghtOf(arguments);
    //The 2 first lines are ignored because it's path it's not about arguments
    var initPosition = 2;
    var verifString;

    //console.log(typeof arg1)

    for (var i = countArgs -1; i > 2; i--) {

        initPosition++
        //console.log(typeof arguments[initPosition]);
        
        var arg1 = Number(arguments[initPosition]);
        console.log(arg1)

        if(isNaN(arg1)){
            
            triee = "char"
            break;

        }else if( Number(arguments[initPosition]) > Number(arguments[initPosition -1])){
          
            triee = "true";

        }else{
           
            triee = "false";
            //console.log(triee);
            break;
        }
       
        
    }

    if(triee == "char"){
        console.log("Erreur ! Veuillez vérifier les données envoyer au programme.")

    }else if(triee == "true"){
        console.log("Triée");
    }else{
        console.log("Pas triée !")
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