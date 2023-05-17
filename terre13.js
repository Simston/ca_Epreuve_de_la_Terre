// Trouver la Suisse (lol)

// Variable for verify all args
const args = process.argv;
var booleanVerif = verifyNumberOfArgument(args);


var numA = process.argv[2];
var numB = process.argv[3];
var numC = process.argv[4];

var suisse;

if(numA === numB || numA === numC || numB === numC) {

    booleanVerif = false;
    console.log("Nous recherchons la Suisse ici les égalités ne sont pas permises !!!");
}

if(booleanVerif) {

    var pos1;
    var pos2;
    var pos3;

    // A COMMENTER
    if( numA < numB && numA < numC){

        pos1 = numA;

    }else if( numA > numB && numA > numC){

        pos3 = numA;

    }else{

        pos2 = numA;

    }

    // A COMMENTER
    if(numA === pos1) {

        if(numB > numC){

            console.log(numA + " " + numC + " " + numB);
            suisse = numC;
            console.log(suisse);

        }else{

            console.log(numA + " " + numB + " " + numC);
            suisse = numB;
            console.log(suisse);

        }
    // A COMMENTER
    }else if(numA === pos2){

        if(numB < numA){

            console.log(numB + " " + numA + " " + numC);
            suisse = numA;
            console.log(suisse);

        }else{

            console.log(numC + " " + numA + " " + numB);
            suisse = numA;
            console.log(suisse);
        }
    // A COMMENTER
    }else if(numA === pos3){

        if(numB > numC){

            console.log(numC + " " + numB + " " + numA);
            suisse = numB;
            console.log(suisse);

        }else{

            console.log(numB + " " + numC + " " + numA);
            suisse = numC;11
            console.log(suisse);

        }
    }
}

// Function to check if there is indeed a single argument passed
function verifyNumberOfArgument(arg){

    //Count the number of Args passed in the command user's, and then iterate over the process array
    var countArgs = lenghtOf(arg);

    if ( countArgs != 5) {
    
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