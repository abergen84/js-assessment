if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	var current = start;
      	var cancelled = false;
      	var res = {
        
        cancel: function() {
          cancelled = true;
        }
      };
      
      	var printCurrent = function() {
        	if (!cancelled && current <= end) {
          	console.log(current++);
          	setTimeout(printCurrent, 100);
        }
      }
      printCurrent();
      return res;
    }
  };
});