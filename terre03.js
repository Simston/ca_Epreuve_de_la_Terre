// L'alphabet à partir de

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var result = ""

// Recover first argument from command line
var letter = process.argv[2];
var positionLetter;

// Loop on the alphabet for recover position of the letter passed as argument

for (var a = 0; a < 25; a++) {

    if (letter === alphabet[a]) {

        positionLetter = a;

        break;

    }
    
}

// Loop on the alphabet with the init position of the letter passed as argument

for (;positionLetter < 26; positionLetter++) {

    result += alphabet[positionLetter];

}

console.log(result);