//Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var interger = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Variable Declaration 
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmInterger;
var confirmSymbol;

// Confirm number of characters
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
    while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 
      alert(`Your password will have ${confirmLength} characters`);

// Determine parameters of password 
    var confirmLowerCase = confirm("Click OK to confirm you would like to include lowercase letters");
    var confirmUpperCase = confirm("Click OK to confirm you would like to include uppercase letters");
    var confirmInterger = confirm("Click OK to confirm you would like to include numbers");
    var confirmSymbol = confirm("Click OK to confirm you would like to include symbols");
    
// Action assigned to password parameters
      var passwordCharacters = []
      
    if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(lowercase)
    }
      
    if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(uppercase)
    }
    
    if (confirmInterger) {
        passwordCharacters = passwordCharacters.concat(interger)
    }
    
    if (confirmSymbol) {
      passwordCharacters = passwordCharacters.concat(symbol)
    }

    console.log(passwordCharacters)  
    
    // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Return password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

