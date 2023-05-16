// 24 to 12

// Variable for verify all args
const args = process.argv;
const booleanVerif = verifyNumberOfArgument(args);


if(booleanVerif) {

    var num24 = process.argv[2];

    //traitement pour récupérer les 2 premiers chiffre et les 2 derniers qui sont séparés par un :
    var number01 = num24[0];
    var number02 = num24[1];
    var number03 = num24[3];
    var number04 = num24[4];

    var onetwo = number01 + number02;
    var twothree = number03 + number04;

    // traitement pour midi  ---->>>>

    if (onetwo == 12) {

        console.log(onetwo + ":" + twothree + "PM");

    }
    
    // traitement de 13h à 23h ---->>>>
    if(onetwo >= 13 && onetwo <= 23){
       
        var num12 = onetwo - 12;
        console.log(num12 + ":" + twothree + "PM");
    }
    
    // traitement de 00minuit à 11h du matin  ---->>>>
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
