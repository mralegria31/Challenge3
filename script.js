// Assignment code here






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var alpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789" ;
var symbols = "#$%&'()!+,-./:;<=>?@[]^_`{|}~";
var passwordLength
var selectUpperAlpha;
var selectNumber;
var selectSymbols;

function generatePasswordLength(){
  passwordLength = prompt("create a password between 8 to 128 character length") ;
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be betweem 8 to 128") ; 
    generatePasswordLength(); 
  } else if (isNaN(passwordLength)) {
    alert ("your input has to be of numeric value")
  } else{
    window.alert("The next few questions will help select how you want your password")
  }
    return passwordLength ;
  
}


function upperAlphaSelector (){
  selectUpperAlpha = prompt("would you want to include uppercase letters. Yes or No")
  if (selectUpperAlpha ===null || selectUpperAlpha ==="") {
    alert("please select Yes or No");
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
    alert("please select Yes or No") ;
    numberSelector();
  }else if (selectNumber === "Yes" || selectNumber === "yes") {
    selectNumber = true;
    return selectNumber ;

  } else if (selectNumber === "No" || selectNumber === "no"){
    selectNumber = false;
    return selectNumber;
  } else {
    alert ("Please select Yes or No")
  }
  return selectNumber
  
}

function symbolSelector(){
  selectSymbols = prompt ("Would you like to include symbols. Yes or No")
  if (selectSymbols === null || selectSymbols === "") {
    alert ("please select Yes or No") ;
    symbolSelector();
  }else if (selectSymbols === "Yes" || selectSymbols === "yes") {
    selectSymbols = true;
    return selectSymbols ;
  } else if (selectSymbols === "No" || selectSymbols === "no"){
    selectSymbols = false;
    return selectSymbols;
  } else {
    alert ("Please select Yes or No")
  }
  return selectSymbols
}

function generatePassword() {
  generatePasswordLength();
  console.log(passwordLength) ;

  upperAlphaSelector();
  console.log(selectUpperAlpha);

  numberSelector();
  console.log(selectNumber);

  symbolSelector();
  console.log(selectSymbols);

  var characters = alpha;
  var password = "";
  if ( selectUpperAlpha && selectNumber && selectSymbols) {
    characters += + selectUpperAlpha + selectNumber + selectSymbols;
  } else if (selectUpperAlpha && selectNumber) {
    characters += selectUpperAlpha + selectNumber;
  } else if (selectNumber && selectSymbols) {
    characters += selectNumber + selectSymbols;
  } else if (selectUppercase && selectSymbols) {
    characters += selectUppercase + selectSymbols;
  } else if (selectUppercase) {
    characters += selectUpperAlpha ;
  } else if (selectNumber) {
    characters += selectNumber;
  } else if (selectSymbols) {
    characters += selectSymbols;
  } else {
    characters === alpha;
  }

  for (var i = 0; i <passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() { 
  
  var newGeneratePassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newGeneratePassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);