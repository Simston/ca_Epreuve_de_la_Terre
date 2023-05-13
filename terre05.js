// Divisions

var args = process.argv;
var booleanVerif = verifyNumberOfArgument(args);

if (booleanVerif) {

    var dividend = process.argv[2];
    var divider = process.argv[3];

    //Convert to type Number
    dividend =  Number(dividend);
    divider = Number(divider);
    
    var quotient = 0;
    var remainder = 0;

    if( divider != 0) {
        
        while (dividend >= divider) {

            // Remove the value of the divisor at each turn of the loop to obtain the result of the division
            dividend -= divider;
            // Number of iterating
            quotient++;
    
        }

        var remainder = dividend;

        // Check that data is a Number
        if( Number.isNaN(dividend) || Number.isNaN(divider)) {

            console.log("Veuillez entrer des données correctes");

        }else{
            // Show result
            console.log("Resultat = " + quotient);
            console.log("Reste = " + remainder);
        }

    }else{
        console.log("Le diviseur ne peut pas être nul");
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
  
    var count = 0;

    for (var i = 0; data[i] != undefined; i++){

    count++;

    }

    return count;

}