// Assignment Code
var generateBtn = document.querySelector("#generate");

  // Uppercase and lowercase array length 26
  var UpCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var LowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // Special character array length 30
  var SpeChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  run = confirm("Would you like to create a password? Yes(OK) No(Cancel)");
  var password = "";

  while(run == true){

  length = prompt("Enter your desired password length. (Enter a number from 8 to 128 characters)");

  if(length >= 8 && length <= 128){
    LowC = confirm("Lowercase? Yes(OK) No(Cancel)");
    UpC = confirm("Uppercase? Yes(OK) No(Cancel)");
    Num = confirm("Numeric? Yes(OK) No(Cancel)");
    SpeC = confirm("Special characters? Yes(OK) No(Cancel)");

    if(LowC == true || UpC == true || Num == true || SpeC == true){
      for(i = 0; i < length; i++){
        rand = Math.ceil(Math.random() * 4);
        console.log(rand)
        if(rand === 1){
          //Uppercase letter
          var x = Math.floor(Math.random() * UpCase.length);

          password +=  UpCase[x];
          console.log(password);
        }
        else if(rand === 2){
          //Lowercase letter
          var x = parseInt(Math.floor(Math.random() * LowCase.length));

          password +=  LowCase[x];
          console.log(password);
        }
        else if(rand === 3){
          //Lowercase letter
          var x = Math.floor(Math.random() * 10);

          password += x;
          console.log(password);
        }
        else{
         //Lowercase letter
          var x = Math.ceil(Math.random() * SpeChar.length);

          password +=  SpeChar[x];
          console.log(password);
        }
      }
    }
    else{
      alert("Invalid Entry: Select at least one character type");
      run = confirm("Would you like to create a password? Yes(OK) No(Cancel)");
    }
  }
  else{
    alert("Invalid Entry");
    run = confirm("Would you like to create a password? Yes(OK) No(Cancel)");
  }
  }
  return password
}

document.getElementById("generate").addEventListener("click", generatePassword);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
