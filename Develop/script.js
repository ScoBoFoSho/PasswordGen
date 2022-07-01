// Assignment code here
const passElements = {
lowercaseLi: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
uppercaseLi:  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
numLi: ['0','1','2','3','4','5','6','7','8','9'],
specialCharLi:  ['!','@','#','$','%','^','&','*','?'],
empytArray: [],
possibleCharactersArray: [],
promptlength: ""
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  passElements.promptlength = prompt("Length of the password is between 8 and 128 characters."); 
  console.log(passElements.promptlength);
  
  if (passElements.promptlength > 8 && passElements.promptlength < 128) {
    var lowerLetters = window.confirm ("Would you care for lowercase letters?")
      if (lowerLetters) {
      // add lower letters to empty array
       }
      var uppercaseLetters = window.confirm ("Would you care for uppercase letters?")
       if (uppercaseLetters){

       }
       var numFigures = window.confirm ("Would you care for some letters?")
       if (numFigures) {

       }
       var specialCharacters = window.confirm ("Would you like to use some SPECIAL characters?")
       if (specialCharacters) {

       }
    }
  }
// the loop belongs here
if ( lowerLetters || uppercaseLetters || numFigures || specialCharacters ); {
  // if they did then lets get some passwords going

let password = ""
for (var i = 0; i <= passElements.promptlength; i++) {
  var randomNumber = Math.floor(Math.random() * empytArrary,length);
   password += empytArray[randomNumber]
 }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  debugger;
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
