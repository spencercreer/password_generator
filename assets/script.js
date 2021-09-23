$(document).ready(function () {
  var generateBtn = $("#generate"); // generate button

  function writePassword() {
    var passwordLength = $("#length").val();
    if (passwordLength >= 8 && passwordLength <= 128) {
      // valid length
      validChars = getUserInputs(); // returns an array of valid characters
      let password = generatePassword(passwordLength, validChars); // returns password as a string

      // write generated password to html
      var passwordText = $("#password");
      passwordText.html(password);
    } else {
      // invalid length entry
      alert("Invalid Length: Enter an number from 8 to 128");
    }
  }

  //generatePassword function
  function generatePassword(passwordLength, validChars) {
    var password = "";
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * validChars.length);
      let randomChar = validChars[randomIndex];
      password += randomChar;
    }
    return password;
  }

  function getUserInputs() {
    let validChars = [];

    // confirm user's desired password characters
    let lowerCaseConfirm = $("#lowercase").is(":checked");
    let upperCaseConfirm = $("#uppercase").is(":checked");
    let numberConfirm = $("#numeric").is(":checked");
    let specialConfirm = $("#specialChar").is(":checked");

    if (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !specialConfirm) {
      // invalid user entry
      alert("Invalid Entry: Select at least one character type");
    } else {
      // valid entry
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
  }

  // Add event listener to generate button
  generateBtn.on("click", writePassword);
})