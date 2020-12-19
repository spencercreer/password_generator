// Assignment Code
var generateBtn = document.querySelector("#generate");

  // Uppercase, lowercase, and special character arrays
  var UpCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var LowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var SpeChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generatePassword function
function generatePassword(){
  var run = true;
  var password = "";

  while(run === true){

    // Prompt user for password length
    length = prompt("Enter your desired password length. (Enter a number from 8 to 128 characters)");
  
    // Password length was correct
    if(length >= 8 && length <= 128){

      // Confirm user's desired password characters
      LowC = confirm("Lowercase? Yes(OK) No(Cancel)");
      UpC = confirm("Uppercase? Yes(OK) No(Cancel)");
      Num = confirm("Numeric? Yes(OK) No(Cancel)");
      SpeC = confirm("Special characters? Yes(OK) No(Cancel)");

      // User selected at least one character
      if(LowC == true || UpC == true || Num == true || SpeC == true){
        for(i = 0; i < length; i++){
          
          rand = Math.ceil(Math.random() * 4);
          x = true;

          while(x == true){
            if(rand === 1 && UpC == true){
              //Uppercase letter
              password +=  UpCase[Math.floor(Math.random() * UpCase.length)];
              x = false;
            }
            else if(rand === 2 && LowC == true){
              //Lowercase letter
              password +=  LowCase[Math.floor(Math.random() * LowCase.length)];
              x = false;
            }
            else if(rand === 3 && Num == true){
              //Numeric
              password += Math.floor(Math.random() * 10);
              x = false;
            }
            else if (rand === 4 && SpeC == true){
              //Special Character
              password +=  SpeChar[Math.floor(Math.random() * SpeChar.length)];
              x = false;
            }
            else{
              // rand was not a character confirmed by user. Choose new rand.
              rand = Math.ceil(Math.random() * 4);
              x = true;
            }
          }
        }
        run = false
      }


      else{
        // User did not confirm at least one character
        run = confirm("Invalid Entry: Select at least one character type\n\nWould you still like to create a password? Yes(OK) No(Cancel)");
      }
    }

    else{
    // Password length entry was incorrect
      run = confirm("Invalid Entry: Enter an number from 8 to 128\n\nWould you still like to create a password? Yes(OK) No(Cancel)");
    }
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
