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
numberOfCharacters = parseInt (prompt ("How many characters would you like your password to contain?"));
if (numberOfCharacters < 8) {
  alert ("Password length must be at least 8 characters");
  return;
} 
if (numberOfCharacters > 128){
  alert ("Password length must be less than 128 characters");
  return;
}
if (isNaN(numberOfCharacters)){
  alert ("Please enter a valid number");
  return;
}
// console.log (numberOfCharacters);
return numberOfCharacters
}


// Function for getting a random element from an array - only to be declared if user selects a number between the parameters set
function getRandom() {
  var passwordLength = numberOfCharacters;
  var characterArray = [];
// Selection of special characters - if true specialCharacters array will be added to the list of characterArray array
  var characters = confirm ("Click OK to include special characters in your password");
  if (characters){
    characterArray = characterArray.concat (specialCharacters);
  }
// Selection of numbers- if true numericCharacters array will be added to the list of characterArray array 
  var number = confirm ("Click OK to include numbers in your password");
  if (number) {
    characterArray = characterArray.concat (numericCharacters);
  }
// Selection of lowercase characters - if true lowerCasedCharacters array will be added to characterArray array
var lowercase = confirm ("Click OK to include lowercase in your password");
if (lowercase) {
  characterArray = characterArray.concat (lowerCasedCharacters);
}
// Selection of uppercase characters - if true upperCasedCharacters array will be added to characterArray array
var uppercase = confirm ("Click OK to include uppercase in your password");
if (uppercase) {
  characterArray = characterArray.concat (upperCasedCharacters);
}

if (characterArray.length===0){
  alert ("You must choose at least one character type");
} 

console.log (characterArray);
//Function to generate password with user input
var finalPassword ="";
for (var i=0; i< passwordLength; i++){
  var index = Math.floor(Math.random()*characterArray.length);
  var digit = characterArray [index];
  finalPassword += digit
}
return finalPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var passwordLength = getPasswordOptions();

  if (!passwordLength) {
    alert ("Thank you for visiting the random password generator");
  } else {
    var finalDisplayedPW = getRandom();
    var passwordText = document.querySelector('#password');
    passwordText.value = finalDisplayedPW;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);