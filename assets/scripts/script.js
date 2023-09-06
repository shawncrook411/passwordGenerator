// Assignment code here
var output = [];
var possibleCharacters = [];
var uppercaseLetters = [];
var lowercaseLetters = [];
var specialCharacters = [];
var inputNumbers = [];
var selectedLength = [];

//Generates all uppercase letters and inports into array based on ASCII values
//Generates all lowercase letters and imports into array based on ASCII values
for(i=0; i<26; i++){
  uppercaseLetters.push(String.fromCharCode(i +65));
  lowercaseLetters.push(String.fromCharCode(i +97));
}
//Generates all numbers and imports into array based on ASCII values
for(i=0; i<10; i++){
  inputNumbers.push(String.fromCharCode(i +48));
  }
//Generates all special characters into array based on ASCII values. The limits are based on most the characters wanted are sequential in ASCII
for(i=32; i<=126; i++){
  if(i <= 64 || (i >= 91 && i <= 96) || (i >=123 && i <= 126)){
   specialCharacters.push(String.fromCharCode(i));
  }
}
//console.log(uppercaseLetters + lowercaseLetters + inputNumbers + specialCharacters)

var generatePassword = function(){
  output = [];
  var lengthSelect = function (){
    selectedLength = window.prompt("How long would you like your password? (Must be between 8-128 characters)")
    selectedLength = Number(selectedLength);

    while(!Number.isInteger(selectedLength)){
      selectedLength = Number(window.prompt("Please try again, your value was not an integer"))    
  }
    while (selectedLength > 128 || selectedLength < 8){  
      selectedLength = Number(window.prompt("Please try again, your value was not in range"))
  }  
  }
  
  var inputCharacters = function(){
    //Clears possibleCharacters Array in case you're running code twice
    possibleCharacters = [];
    console.log("Clear Contents: " + possibleCharacters);
    //Pushes all Uppercase Letters to the possibleCharacters Array
    if(window.confirm("Would you like to include Uppercase letters?")){     
      for(i=0; i<uppercaseLetters.length; i++){
      possibleCharacters.push(uppercaseLetters[i]);
      }
    }
    //Pushes all Lowercase Letters to the possibleCharacters Array
    if(window.confirm("Would you like to include Lowercase letters?")){
      for(i=0; i<lowercaseLetters.length; i++){
        possibleCharacters.push(lowercaseLetters[i]);
        }
    }
    //Pushes all Special Characters to the possibleCharacters Array
    if(window.confirm("Would you like to include Special Characters?")){
      for(i=0; i<specialCharacters.length; i++){
        possibleCharacters.push(specialCharacters[i]);
        }
    }
    //Pushes all Numbers to the possibleCharacters Array
    if(window.confirm("Would you like to include Numbers?")){
      for(i=0; i<inputNumbers.length; i++){
        possibleCharacters.push(inputNumbers[i]);
        }
    }
  }
    //Tests to make sure you submitted some type of characters
  var testLength = function(){
    while(possibleCharacters.length === 0){
    alert("You must include at least one type of characters")
    inputCharacters()   
  }
}

  var generation = function(){
    
    for(i=0; i<selectedLength; i++){
      output = output + (possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)])
    }


  }

lengthSelect();
inputCharacters(); 
testLength();
generation();  
return output;
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