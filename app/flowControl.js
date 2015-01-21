if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
      if (typeof num != 'number') {     //check to make sure that the number you put in is actually a number
        return false;                   //if it's not, return false
      }
      
      var divBy3 = (num % 3 === 0);     //set a couple of variables to make it easier to handle. this one is divisible by 3
      var divBy5 = (num % 5 === 0);     //this one is divisible by 5
      
      if (divBy3 && divBy5) {           //if the number is divisible by both 3 AND 5, return fizzbuzz (make sure to check that the number
        return 'fizzbuzz';              //is divisible by both before you check the individual ones)
      } else if (divBy3) {              //if divisible by 3, return fizz
        return 'fizz';
      } else if (divBy5) {              //if divisible by 5, return buzz
        return 'buzz';
      } else {
      return num;                       //if its not divisible by 3 and 5, by 3, or by 5, just return the number.
      }

    }
  };
});
