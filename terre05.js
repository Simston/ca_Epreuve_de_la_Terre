// Divisions

var args = process.argv;
var booleanVerif = verifyNumberOfArgument(args);

if (booleanVerif) {

    var dividend = process.argv[2];
    var divider = process.argv[3];

   dividend =  Number(dividend)
   divider = Number(divider)
    

    var quotient = 0;

    if( divider != 0) {
       
        while (dividend > divider) {

            dividend -= divider;
            quotient++
    
        }

        var remainder = dividend;

        if( typeof dividend != "number" || typeof divider != "number") {

            console.log("FUCK")
        }else{
            console.log("Resultat = " + quotient);
            console.log("Reste = " + remainder);
        }

    

    }else{
        console.log("Le diviseur ne peut pas être nul")
    } 

}else{
    console.log("Veuillez entrer 2 nombres");
}


// Function to check if there is indeed a single argument passed
function verifyNumberOfArgument(arg){

    //Count the number of Args passed in the command user's, and then iterate over the process array
    var countArgs = lenghtOf(arg);

    //we needs two arguments for this program. Count Arg 1 and 2 is about Path
    if ( countArgs === 4 ) {
        return true;
    }else{
        return false;
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