/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

function swapCase(str) {

	// Split string into an array
	let worldString = str.split("");

	// Test it
	console.log(worldString);

	// Create a for loop
	for(i = 0; i < worldString.length; i++){
	// Convert Upper to Lower
		if (worldString[i] === worldString[i].toUpperCase()){
			worldString[i] = worldString[i].toLowerCase();
	// Else if convert Lower to Upper
		} else if (worldString[i] === worldString[i].toLowerCase()){
			worldString[i] = worldString[i].toUpperCase();
    	} else {
	// Else move past non-string characters
      		worldString[i] = worldString[i]
    	}
	}
	// Join and return the array as a string
  let newString = worldString.join("");
  return newString;
}

	//Pass in an argument and then log it
var result = swapCase("Hello World!")
console.log(result)