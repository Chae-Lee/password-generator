//Pseudocoding
//Aim : create an application that an employee can use to generate a random password
// Generate a password when button is clicked 
  //present series of prompts for pw criteria
    //length of pw: at least 8 characters, no more than 128. 8 < x < 128
    // character types: lower case, upper case, numeric, special characters
  // Code should validate for each input 
    //at least 1 character type should be selected 
  // Once prompt is answered, pw should be generated & displayed in an alert or written to the page
// Process when everything goes as planned & all criteria is met 
// 1) Click button and then a pop up 'prompt' asking "how many characters would you like your password to contain?" 
// 2) once a value is entered, another pop up 'prompt' asks "Click OK to confirm including special characters"
// 3) prompt asking "Click OK to confirm including numeric characters"
// 4) prompt asking "Click OK to confirm including lowercase characters"
// 5) prompt asking "Click OK to confirm including uppercase characters"
// 6) random password is generated and displayed on the webpage inside the password generator box

// Process when criteria is not met 
// 1) password length - less than 8 / more than 128 number is entered
      // if (user types number less than 8){
        // then prompt saying "Password length must be at least 8 characters"}
      // if (user types number more than 128){
        //then prompt saying "Password length must be less than 128 characters"}
// 2) at least one character type should be selected 
      // if no characters are selected then "error message - at least one character type needs to be selected to generate a password"


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var numberOfCharacters;

// Function to prompt user for password options
function getPasswordOptions() {
var numberOfCharacters = prompt ("How many characters would you like your password to contain?");
if (numberOfCharacters < 8) {
  alert ("Password length must be at least 8 characters");
} else if (numberOfCharacters > 128){
  alert ("Password length must be less than 128 characters");
} else {
  getRandom ();
}
}

getPasswordOptions ()

// Function for getting a random element from an array
function getRandom(arr) {
  var special = confirm ("Click OK to confirm including special characters");
  var number = confirm ("Click OK to confirm including numeric characters");
  var lowercase = confirm ("Click OK to confirm including lowercase characters");
  var uppercase = confirm ("Click OK to confirm including uppercase characters");
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

