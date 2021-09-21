// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// TODO: Write the generatePassword function
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// TODO:ask the user how many characters they want in the password --> use a prompt --> make sure the information is correct --> number --> 8+ or 123-
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// TODO: write a series of 4 confirms --> set these to be var --> to check if the user wants
// TODO: write 4 arrays one for lower case, one upper, number, and special
// TODO: check that the prompts true or false --> using above var for this --> and add the corresponding arrays to a holding array
//  upperConfirm --> true --> uppercase[] --> add to the holding []
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// TODO: check that we have at least one of the types
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// TODO: take our holding array and randomize the characters --> adding to a second array
// TODO: take the randomized characters and select the amount that the user has chosen for the password length--> add these to a "return array" --> for loop the length for this will be user password length
// WHEN the password is generated
// THEN the password is either displayed written to the page
// TODO: tkae our return array and use array methods to convert to a string --> have a var for this and return string