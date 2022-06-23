// Assignment code here

//validate the input
//generate password based on citeria 
//display/return password to the page

// all possible characters for random password
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "[", "}", "{"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


//promt user for password criteria
  //prompt password length between 8 - 128
function generatePassword() {
  var passwordLength = ""

  var lengthPrompt = window.prompt("How long would you like your password to be?", "Please enter a number between 8 - 128!"); //for loop? math.random?
    
  
  //confirm lowercase, uppercase, numbers, spec char 
  var lowercasePrompt = window.confirm("Would you like lowercase letters in your password?"); // if statemant?

  var uppercasePrompt = window.confirm("Would you like uppercase letters in your password?"); // if statemant?

  var charPrompt = window.confirm("Would you like special characters in your password?"); // if statemant?

  var numbers = window.confirm("would you like numbers in your password?"); // if statemant?
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
