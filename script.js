// Assignment code here






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var alpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789" ;
var symbols = "#$%&'()!+,-./:;<=>?@[]^_`{|}~";
var passwordlength
var selectUpperAlpha;
var selectNumber;
var selectSymbols;

function generatePasswordLength(){
  passwordlength = prompt("create a password between 8 to 128 character length") ;
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Password must be less than 128") ; 
    generatePasswordLength(); 
  } else if (isNaN(passwordlength)) {
    alert ("your input has to be of numeric value")
  } else{
    window.alert("The next few questions will help select how you want your password")
  }
    return passwordlength ;
  
}


function UpperAlphaselector (){
  selectUpperAlpha = prompt("would you want to include uppercase letters. Yes or No")
  if (selectUpperAlpha ===null || selectUpperAlpha ==="");{
    alert("please select correct letter size");
    UpperAlphaselector(); 
  } else if ()
  


}

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

