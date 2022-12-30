// Assignment code here
// Array of Character Options
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Generate the Password
function generatePassword() {
  var finalPassword = "";
  // input of how many characters
  var numberOfCharacters = prompt("Please enter the number of characters");
  console.log(numberOfCharacters);
  // review to ensure it is between 8 to 128 characters
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Must be between 8 and 128 characters");
    return;
  }
  //prompt for password criteria
    lCase = confirm("Do you want lowercase letters?");
    uCase = confirm("Do you want uppercase letters?");
    num = confirm("Do you want numbers?");
    sCharacters = confirm("Do you want special characters?")
    
    console.log(typeof lCase);
    console.log(lCase);

    // select a random lowercase 
    for (var i = 0; i < numberOfCharacters; i++) {
      if (lCase === true) {
       var lc = alphaLowerCase[Math.floor(Math.random() * 26)];
       console.log(lc);
       finalPassword = finalPassword + lc;
       console.log(finalPassword);
     }
     }

  return finalPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
