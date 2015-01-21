if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {     //function count that takes a start time and end time
    	var current = start;             //set the start time to a variable called current
      	var cancelled = false;         //set a variable called cancelled to be equal to false
      	var res = {                  
                                      //create an object called res, which has one method, cancel. When run, it will change cancelled to true.
        cancel: function() {
          cancelled = true;
        }
      };
      
      	var printCurrent = function() {          //printCurrent is a function that says if cancelled is false AND current start time is less
        	if (!cancelled && current <= end) {    //than the ending time, console log out the current time at a settimeout interval rate of
          	console.log(current++);              //1/10th of a second. 
          	setTimeout(printCurrent, 100);
        }
      }
      printCurrent();                           //execute the printCurrent function, and return the res object. 
      return res;
    }
  };
});