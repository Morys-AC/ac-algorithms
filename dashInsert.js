/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

	// Create a function 
function dashInsert(number){
    // Store a string of numbers to search and change
	var numString = "";
	// Break up the number string into an array that can be iterated through 
    var numArr = number.toString().split("");
	// Console log the new array to see that it's now ready to be looped through
    console.log(numArr);
	// The for statement loops through the entire length of the array starting at the 0 index
    for(i = 0; i < numArr.length; i++){
	// If statement that divides the number in the array by two and checks to see if it has a remainder of one. If it does AND the next number in the array is also an odd number with a remainder of one...
        if(numArr[i] % 2 === 1 && numArr[i+1] % 2 === 1){
	// Then the += operator will check the string and place the "-" in the space to the right of the [i] variable in the array being checked
            numString += numArr[i] + "-";
	// If the number is even an else statement will log nothing new to add to the array and continue looping through the array until it is completed.
        }else{
            numString += numArr[i];
        }
    }
	// This new string is then logged with (possibly) dashes added
    console.log(numString);
}
	// Here we call the function and are able to push in arguments to be looped through
dashInsert(987450298347509283745098);