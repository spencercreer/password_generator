// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  run = confirm("Would you like to create a password? Yes(OK) No(Cancel)");

  while(run == true){

  length = prompt("Enter your desired password length. (Enter a number from 8 to 128 characters)");

  if(length >= 8 && length <= 128){
    LowC = confirm("Lowercase? Yes(OK) No(Cancel)");
    UpC = confirm("Uppercase? Yes(OK) No(Cancel)");
    Num = confirm("Numeric? Yes(OK) No(Cancel)");
    SpeC = confirm("Special characters? Yes(OK) No(Cancel)");

    if(LowC == true || UpC == true || Num == true || SpeC == true){
      for(i = 0; i < length; i++){
        rand = parseInt(Math.floor(Math.random * 3));
        console.log(rand);
        alert("Password generated");
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
}


document.getElementById("generate").addEventListener("click", generatePassword);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
