// Racine carré d'un nombre

// Variable for verify all args
const args = process.argv;
const booleanVerif = verifyNumberOfArgument(args);

var racineFirstDecimal;
var racineSecondDecimal;

//finalResult
var realFinalRacine;
var finalRacine;
var racineCarrée;


if(booleanVerif){

    var nombre = process.argv[2];
  

    for(var i = 0; i <= nombre; i++) {

        racineCarrée = i * i;
        //console.log(racineCarrée)

        if (racineCarrée == nombre) {

            console.log("La racine carré de " + nombre + " est " + (i))
            break;

        }else if (racineCarrée > nombre) {

            racineCarrée = (i-1);
            //console.log(racineCarrée);
            finalRacine = racineCarrée;

            // Loop for find first decimal
            for (var y = 0; y < nombre; y++) {

                racineCarrée += 0.1;
                racineFirstDecimal = racineCarrée * racineCarrée;
                //console.log(racineFirstDecimal)
                //console.log(racineFirstDecimal)
                finalRacine = finalRacine + 0.1;
               
               
                if (racineFirstDecimal > nombre) {

                    finalRacine = finalRacine - 0.1;
                    //console.log(finalRacine)

                    realFinalRacine = finalRacine;
                    console.log(realFinalRacine)


                    break;
                }
            }

            for (var y = 0; y < nombre; y++) {

                finalRacine = (finalRacine + 0.01);
                
                racineSecondDecimal = finalRacine * finalRacine;
                console.log(racineSecondDecimal)
                realFinalRacine = realFinalRacine + 0.01;
               //console.log(realFinalRacine)
    
                if (racineSecondDecimal > nombre) {
    
                
                    realFinalRacine = realFinalRacine - 0.01;
                   
                    console.log(realFinalRacine.toFixed(2))
    
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