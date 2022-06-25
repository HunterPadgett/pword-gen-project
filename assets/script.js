



// Assignment Code
var generateBtn = document.querySelector("#generate");
// all possible characters for random password
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "[", "}", "{", "`", "~", ".", ","];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersPw = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//array to store all possible  characters in
var charOptions = [];



function generatePassword() {
  
    //promt user for password criteria 
    //pass length between 8 - 128
  var lengthPrompt = prompt("Please enter a number between 8 - 128 to generate your password."); 
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      alert("Invalid entry. Please enter a number between 8 and 128.");
      generatePassword();
    }


    //confirm lowercase, uppercase, numbers, spec char prompts 
    //with if statments to store the char if the user wants to include them
  var lowers = confirm("Click OK if you would like lowercase letters in your password?");

  if (lowers) {
    charOptions = charOptions.concat(lowerCase);
    
  }

  var uppers = confirm("Click OK if you would like uppercase letters in your password?");

  if (uppers) {
    charOptions = charOptions.concat(upperCase);

  }

  var specs = confirm("Click OK if you would like special characters in your password?");

  if (specs) {
    charOptions = charOptions.concat(specChar);

  }

  var nums = confirm("Click OK if you would like numbers in your password?");

  if (nums) {
    charOptions = charOptions.concat(numbersPw);

  }

  //validate the input
  //generate password based on citeria 
  var passLength = '';
  for (var i = 0; i < lengthPrompt; i++) {
    passLength += charOptions[Math.floor(Math.random() * charOptions.length)];
  }  
  //display/return password to the page
  return passLength
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
