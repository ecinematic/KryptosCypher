// Assignment code here


//Generate the Password
function generatePassword() {
  var finalPassword = "";
  // input of how many characters
  var numberOfCharacters = prompt("Please enter the number of characters");
  console.log(numberOfCharacters);
  // review to ensure it is between 8 to 128 characters
  if (numberOfCharacters < 8) {
    alert("Must be greater than 8 characters");
    return;
  }
  if (numberOfCharacters > 128) {
    alert("Must be less than 128 characters");
    return;
  }
  finalPassword = "test";
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
