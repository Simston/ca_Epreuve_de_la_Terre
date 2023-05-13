// Inverser une chaîne

// Recover first argument from command line
var string = process.argv[2];
//console.log(string)

var lenghtOfstring = lenghtOf(string)
//console.log(lenghtOfstring)


var inversedString = [];

for(var i = lenghtOfstring - 1; i >= 0; i--) {

            inversedString += string[i];
            //console.log("1");  
}


console.log(inversedString)


//function for iterate over a data and return its lenght
function lenghtOf(data) {
  
    var count = 0;

    for (var i = 0; data[i] != undefined; i++){

    count++;

    }

    return count;

}