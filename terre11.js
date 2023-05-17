// 24 to 12

// Variable for verify all args
const args = process.argv;
const booleanVerif = verifyNumberOfArgument(args);

if(booleanVerif) {

    var num24 = process.argv[2];

    // processing to retrieve the first 2 digits and the last 2 which are separated by a ":"
    var number01 = num24[0];
    var number02 = num24[1];
    var number03 = num24[3];
    var number04 = num24[4];

    var onetwo = number01 + number02;
    var twothree = number03 + number04;

    // midday treatment ---->>>>
    if (onetwo == 12) {

        console.log(onetwo + ":" + twothree + "PM");

    }
    
    // treatment from 13 to 24 ---->>>>
    if(onetwo >= 13 && onetwo <= 23){
       
        var num12 = onetwo - 12;
        console.log(num12 + ":" + twothree + "PM");
    }
    
    // treatment from 00 midnight to 11 am ---->>>>
    if(onetwo >= 00 && onetwo < 12 ) {

        console.log(onetwo + ":" + twothree + "AM");

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
