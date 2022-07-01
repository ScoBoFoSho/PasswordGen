// Assignment code here
const passElements = {
  lowercaseLi: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  uppercaseLi: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  numLi: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharLi: ["!", "@", "#", "$", "%", "^", "&", "*", "?"],
  emptyArray: [],
  promptlength: "",
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  passElements.promptlength = prompt(
    "Length of the password is between 8 and 128 characters."
  );
  console.log(passElements.promptlength);

  if (passElements.promptlength >= 8 && passElements.promptlength <= 128) {
    var lowerLetters = window.confirm(
      "Would you care to include lowercase letters?"
    );
    if (lowerLetters) {
      passElements.emptyArray = passElements.emptyArray.concat(
        passElements.lowercaseLi
      );
    }
    var uppercaseLetters = window.confirm(
      "Would you care to include uppercase letters?"
    );
    if (uppercaseLetters) {
      passElements.emptyArray = passElements.emptyArray.concat(
        passElements.uppercaseLi
      );
    }
    var numFigures = window.confirm("Would you care to include some numbers?");
    if (numFigures) {
      passElements.emptyArray = passElements.emptyArray.concat(
        passElements.numLi
      );
    }
    var specialCharacters = window.confirm(
      "Would you care to include some SPECIAL characters?"
    );
    if (specialCharacters) {
      passElements.emptyArray = passElements.emptyArray.concat(
        passElements.specialCharLi
      );
    }
  }

  let password = "";
  for (var i = 0; i < passElements.promptlength; i++) {
    debugger;
    var randomNumber = Math.floor(
      Math.random() * passElements.emptyArray.length
    );
    password += passElements.emptyArray[randomNumber];
  }

  passElements.emptyArray = [];

  return password;
}

// the loop belongs here
// if (lowerLetters||upercaseLetters||numFigures||specialCharacters); {
// if they did then lets get some passwords going

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
