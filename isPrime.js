/*

Given a number between 1 and 2^16, return true if the number is prime, return false if it is not.
Remember 2 is a prime number and 1 is not.

Hint: You may not need to check numbers up to num to check for primeness.

*/

/**

Examples:

var result = isPrime(1)
console.log(result) // false

var result = isPrime(2)
console.log(result) // true

var result = isPrime(3)
console.log(result) // true

var result = isPrime(4)
console.log(result) // false

var result = isPrime(29)
console.log(result) // true

var result = isPrime(51)
console.log(result) // false

**/
//One is not a prime number. Check it and return false
//Two is a prime number. Check it and return true
//'Else' I have to create a for loop that checks to see if a number is larger than two, then divides that number by itself to see if it equals zero. Return true or false.

function isPrime(n){
  if (n === 1){
    return false;
  }else if(n === 2){
    return true;
  }else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

console.log(isPrime(13));
console.log(isPrime(22));