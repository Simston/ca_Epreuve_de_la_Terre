// Racine carré d'un nombre

// Variable for verify all args
const args = process.argv;
const booleanVerif = verifyNumberOfArgument(args);

var racineFirstDecimal;
var racineSecondDecimal;

//finalResult
var realFinalRacine;
var finalRacine;
var racineCarree1;


if(booleanVerif){

    var nombre = process.argv[2];
  

    for(var i = 0; i <= nombre; i++) {

        racineCarree1 = i * i;

        if (racineCarree1 == nombre) {

            console.log("La racine carré de " + nombre + " est " + (i))
            break;

        }else if (racineCarree1 > nombre) {

            racineCarree1 = (i-1);
            finalRacine = racineCarree1;

            // Loop for find first decimal
            for (var y = 0; y < nombre; y++) {

                racineCarree1 += 0.1;
                racineFirstDecimal = racineCarree1 * racineCarree1;
                finalRacine = finalRacine + 0.1;
               
                if (racineFirstDecimal > nombre) {

                    finalRacine = finalRacine - 0.1;
                    //console.log(finalRacine)

                    realFinalRacine = finalRacine;
                    //console.log(realFinalRacine)
                    break;
                }
            }

            for (var y = 0; y < nombre; y++) {

                finalRacine = (finalRacine + 0.01);
                
                racineSecondDecimal = finalRacine * finalRacine;
                //console.log(racineSecondDecimal)
                realFinalRacine = realFinalRacine + 0.01;
               //console.log(realFinalRacine)
    
                if (racineSecondDecimal > nombre) {
     
                    realFinalRacine = realFinalRacine - 0.01;
                    console.log("La racine carrée de " + nombre + " est " + realFinalRacine.toFixed(2))
                    break;
                   
                }
            }
            break;        
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