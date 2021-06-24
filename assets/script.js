$(document).ready(function () {
  // Assignment Code
  var generateBtn = $("#generate");

  // Uppercase, lowercase, and special character arrays
  var UpCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var LowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var SpeChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = $("#password");

    passwordText.html(password);

  }

  //generatePassword function
  function generatePassword() {
    var run = true;
    var password = "";
    var length = $("#length").val();
    var LowC = $("#lowercase").is(":checked");
    var UpC = $("#uppercase").is(":checked");
    var Num = $("#numeric").is(":checked");
    var SpeC = $("#specialChar").is(":checked");

    // Password length was correct
    if (length >= 8 && length <= 128) {
      // User selected at least one character
      if (LowC == true || UpC == true || Num == true || SpeC == true) {
        for (i = 0; i < length; i++) {

          rand = Math.ceil(Math.random() * 4);
          x = true;

          while (x == true) {
            if (rand === 1 && UpC == true) {
              //Uppercase letter
              password += UpCase[Math.floor(Math.random() * UpCase.length)];
              x = false;
            }
            else if (rand === 2 && LowC == true) {
              //Lowercase letter
              password += LowCase[Math.floor(Math.random() * LowCase.length)];
              x = false;
            }
            else if (rand === 3 && Num == true) {
              //Numeric
              password += Math.floor(Math.random() * 10);
              x = false;
            }
            else if (rand === 4 && SpeC == true) {
              //Special Character
              password += SpeChar[Math.floor(Math.random() * SpeChar.length)];
              x = false;
            }
            else {
              // rand was not a character confirmed by user. Choose new rand.
              rand = Math.ceil(Math.random() * 4);
              x = true;
            }
          }
        }
      } else {
        // User did not confirm at least one character
        alert("Invalid Entry: Check at least one password criteria");
      }
    } else {
      // Password length entry was incorrect
      alert("Invalid Entry: Enter an password length from 8 to 128")
    }
    return password
  }

  // Add event listener to generate button
  generateBtn.on("click", writePassword);
})
