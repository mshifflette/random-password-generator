
// Assignment Code
var generateBtn = document.querySelector("generate");
let caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowercase = ["a","b","c","d","e","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers =[0,1,2,3,4,5,6,7,8,9]
let special = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","^","_","{","|","}","~"]

// Generate password function
function generatePassword() {
  var userCaps = confirm("Would you like your password to include upper case letters?");
  var userLowerCase = confirm("Would you like your password to include lower case letters?");
  var userNumbers = confirm("Would you like your password to include numbers?");
  var userSpecial = confirm("Would you like your password to include special characters?");
  var userLength = prompt("Please choose a length for your password between 8 and 128 characters")
  let holdingArray =[];
  
  if (userLength > 128 || userLength < 8){
    alert(" Error, Please try again.");
    generatePassword()
  }
  // check the user choices on characters
  if (userCaps){
   holdingArray = holdingArray.concat(caps);
  }

  if(userLowerCase){
    holdingArray = holdingArray.concat(lowercase);
  } 

  if(userNumbers){
    holdingArray = holdingArray.concat(numbers);
  } 

  if(userSpecial){
    holdingArray = holdingArray.concat(special);     
  }

  if (holdingArray === []){
    alert("Please select atleast one character type!");
    generatePassword()
  }


// randomly generate a new array to match the length the user has picked
  let randomArray = [];
  for (let i = 0; i < userLength; i++){
    var random = holdingArray[Math.floor(Math.random()*holdingArray.length)];
    randomArray.push(random);
   }
// convert the array to string and remove any commas or spaces 
   let generatedPasswordWithCommas = randomArray.join();
   let generatedPassword = generatedPasswordWithCommas.replace(/,/g, '');


   
   console.log(generatedPassword)

   return generatedPassword;
  }
  
    
// Write password to the #password input
function writePassword() {
  password = generatePassword();
  document.getElementById('password').innerHTML = password;


}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", function() {
  writePassword();
});





