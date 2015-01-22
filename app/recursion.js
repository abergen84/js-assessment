if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	
    },

    permute: function(arr) {
    	
    	var finalArray = [];  //define our final array here, where all the numbers combos will go
    	var temp = [];			//define a temp array here where the numbers will temporarily be placed before going into final array

    	function test(){
    		for (var i = 0; i < arr.length; i++){  //for loop, so for each instance, so long as its less than the length of the array, we will:
    			var num = arr.splice(i, 1)[0];     //remove that number at index i 

    			temp.push(num);						//and push it to temp array
    			
    			if (arr.length == 0) {				//then while the loop is still going, test until array length is 0, and if so, then 
    				finalArray.push(temp.slice());	//slice the numbers from temp and push them into the final array
    			}
    			
    			test();								//execute function test
    			arr.splice(i, 0, num);				
    			temp.pop();
    		}
    		return finalArray;
    	}
    	return test();
    }
  };
});