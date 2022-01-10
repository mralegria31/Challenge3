// Assignment code here
var alpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789" ;
var symbols = "#$%&'()!+,-./:;<=>?@[]^_`{|}~";


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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

