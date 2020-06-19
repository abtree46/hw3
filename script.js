// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {


  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Array of special characters to be included in the password
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+']

  // Array of lowercase characters to be included in the password
  var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  // Array of uppercase characters to be included in the password
  var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


  //these are my prompts 
  //a prompt for how many characters the user would like
  //must be 8-128 characters prompt?
  var passwordLength = prompt('How long would you like your password? Pick between 8 and 128 characters.');


  //ask the user if they want lowercase confirm?
  var confirmLower = confirm('Do you want lowercase letters included?');

  //ask the user if they want uppercase confirm?
  var confirmUpper = confirm('Do you want uppercase letter included?');

  //ask the user if they want numeric confirm?
  var confirmNumeric = confirm('Do you want numbers included?');

  //ask the user if they want special characters confirm?
  var confirmSpecial = confirm('How about any special characters?');

  // to hold the values selected
  var completedPassword = [];
  var chosenResults = [];
  
  //condtions
  //make sure the password stays in the length parameters
  if (!passwordLength) {
      alert('You have to have something!');
  
    } else if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt('Between 8 and 128 please!');
    
    }
  //if yes to numbers add to completePassword
  if (confirmNumeric) {
    completedPassword = completedPassword.concat(numericCharacters);
  }
  //if yes to lowercase add to completePassword
  if (confirmLower) {
    completedPassword = completedPassword.concat(lowerCharacters);
  }
  //if yes to uppercase add to completePassword
  if (confirmUpper) {
    completedPassword = completedPassword.concat(upperCharacters);
  }
  // if yes to special characters add to completePassword
  if (confirmSpecial) {
    completedPassword = completedPassword.concat(specialCharacters);
  }
  //chooses the random values pushes chosenResults to completedPassword ( the internet helped me with this and honestly I'm not sure I entirely underdstand.)
  for (var i = 0; i < passwordLength; i++) {

    chosenResults.push(completedPassword[Math.floor(Math.random() * completedPassword.length)]);
  }
  // changes it from undefined to completedPassword
  return completedPassword.join('');
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
