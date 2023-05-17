// 12 to 24

// Variable for verify all args
const args = process.argv;
const booleanVerif = verifyNumberOfArgument(args);

if(booleanVerif) {

    var num24 = process.argv[2];

    //processing to retrieve the first 2 digits and the last 2 which are separated by a ":"
    var number01 = num24[0];
    var number02 = num24[1];
    var number03 = num24[3];
    var number04 = num24[4];
    var pmORam = num24[5];
    //console.log(pmORam);

    var onetwo = number01 + number02;
    var twothree = number03 + number04;

    // midday treatment ---->>>>
    if (onetwo == 12) {

        console.log(onetwo + ":" + twothree);

    // treatment from 1 p.m. to 11 p.m. ---->>>>
    }else if(onetwo >= 1 && onetwo <= 11 && pmORam == "P" ){
       
        var num12 = Number(onetwo) + 12;
        console.log(num12 + ":" + twothree);

    // treatment from 00 midnight to 11 am ---->>>>
    }else if(onetwo >= 00 && onetwo < 12 ) {

        console.log(onetwo + ":" + twothree);

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