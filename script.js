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


function upperAlphaSelector (){
  selectUpperAlpha = prompt("would you want to include uppercase letters. Yes or No")
  if (selectUpperAlpha ===null || selectUpperAlpha ==="") {
    alert("please select correct option");
    upperAlphaSelector(); 
  } else if (selectUpperAlpha === "Yes" || selectUpperAlpha ==="yes") {
    selectUpperAlpha = true;
    return selectUpperAlpha ;
     
  } else if (selectUpperAlpha === "No" || selectUpperAlpha === "no"){
    selectUpperAlpha = false;
    return selectUpperAlpha ;
    
  } else {
    alert ( "Please select Yes or No.")
  }


  return selectUpperAlpha 

  


}

function numberSelector (){
  selectNumber = prompt ("Would you like to include numbers. Yes or No")
  if (selectNumber ===null || selectNumber === "") {
    alert("please type in only numbers")
  }
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

