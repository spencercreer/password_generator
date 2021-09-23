$(document).ready(function () {
  const generateBtn = $("#generate"); // generate button

  function writePassword() {
    let passwordText = $("#password");
    passwordText.html("");

    let passwordLength = $("#length").val();

    let lowerCaseConfirm = $("#lowercase").is(":checked");
    let upperCaseConfirm = $("#uppercase").is(":checked");
    let numberConfirm = $("#numeric").is(":checked");
    let specialConfirm = $("#specialChar").is(":checked");

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid Length: Enter a number from 8 to 128"); // invalid length entry
    } else if (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !specialConfirm) {
      alert("Invalid Entry: Select at least one character type"); // no character type checked
    } else {
      // valid criteria
      let validChars = getUserInputs(lowerCaseConfirm, upperCaseConfirm, numberConfirm, specialConfirm); // returns an array of valid characters
      let password = generatePassword(passwordLength, validChars); // returns password as a string

      // write generated password to html
      passwordText.html(password);
    }
  }

  function generatePassword(passwordLength, validChars) {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * validChars.length);
      let randomChar = validChars[randomIndex];
      password += randomChar;
    }
    return password;
  }

  function getUserInputs(lowerCaseConfirm, upperCaseConfirm, numberConfirm, specialConfirm) {
    let validChars = [];

    if (lowerCaseConfirm) {
      let lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      validChars = validChars.concat(lowerCaseChars);
    }
    if (upperCaseConfirm) {
      let upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      validChars = validChars.concat(upperCaseChars);
    }
    if (numberConfirm) {
      let numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      validChars = validChars.concat(numberChars);
    }
    if (specialConfirm) {
      let specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
      validChars = validChars.concat(specialChars);
    }
    return validChars;
  }

  // event listener on generate button
  generateBtn.on("click", writePassword);
})