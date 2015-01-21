if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    "use strict";
  return {
    indexOf : function(arr, item) {
        for (var i = 0; i < arr.length; i++){  //for loop, starting at 0, if index 0 of array (1 in this case) is = to number youre
            if (arr[i] === item){               //searching for, return that index, otherwise, return -1. 
                return i;
            }
        }
            return -1;
    },

    sum : function(arr) {
        var total = 0;

        for (var i = 0; i < arr.length; i++){   //define an empty variable number that will receive sum. for loop, starting at 0, add to total
            total += arr[i];                    //the number at index i of the array, until i is less than the array length
        }
        return total;
    },

    remove : function(arr, item) {              //for loop, starting at 0, if index i of array is equal to the number youre trying to remove,
        for (var i = 0; i < arr.length; i++){   //then splice it. Splice takes in the index of what youre removing, and the number of indexes
            if (arr[i] === item){               //you are removing (1 represents taking out just that 1. 2, etc means the ones behind it as well)
                arr.splice(i, 1)
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {       //for loop, starting at 0, while i is still less than array length AND index i of array
        for (var i = 0; i < arr.length; i++){       //is equal to the number we are removing, splice it out. after loop runs, return array.
            while((i < arr.length) && (arr[i] === item)){
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);         //simple array.push function, which takes in the item you are trying to stick to the end
        return arr;
    },

    truncate : function(arr) {
        arr.pop();              //simple array.pop method, which just knows to remove the last item (doesnt have to be specified)
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);      //simple array.unshift, which takes in the item you are trying to place at the beginning of array
        return arr;
    },

    curtail : function(arr) {
        arr.shift();            //opposite of pop, this removes the FIRST item in the array, while pop removes the LAST item in the array
        return arr;
    },

    concat : function(arr1, arr2) {
        var newarray = arr1.concat(arr2);  //concat merges two arrays. array #1 -> concat -> array #2.  need to declare a variable here for the
        return newarray;                    //new array
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);         //splice can take up to 3 arguments; the index where you want to splice, the number of elements
        return arr;                         //you want to remove, and the item you want to add. if item is left blank, it wont add anything.
    },

    count : function(arr, item) {               //set a variable equal to 0. start a for loop, running through until i is less than the
        var total = 0;                  //length of the array. for each cycle, if index i of array is equal to the number youre trying to
                                        //find duplicates of, then increase your total by 1 each time (the ++ denotes this)
        for (var i = 0; i < arr.length; i++){
            if (arr[i] === item){
                total++;
            }
        }
        return total;
    },

    duplicates : function(arr) {
        var counts = {}             //set an empty object called counts. start a for loop, define element as index i of array. and for every 
                                    //instance, set the element property of counts object to equal 1 plus the total already in that property,
        for (var i = 0; i < arr.length; i++) {  //or 0.
        var elt = arr[i];
        counts[elt] = 1 + (counts[elt] || 0);
      }
      
      var dups = [];                //set an empty array for the duplicates. for loop, saying for the variable elt in counts object, if 
      for (var elt in counts) {     //elt property in counts object is greater than 1, push that elt property to duplicate array.
        if (counts[elt] > 1) {
          dups.push(elt);
        }
      }
      return dups;
    },

    square : function(arr) {
        for (var i = 0; i < arr.length; i++){  //for loop, for every instance, take index i of array and multiply it by itself, then return
            arr[i] *= arr[i];                   //the new array.
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var occurences = [];                        //set an empty array to take in all occurences

        for (var i = 0; i < arr.length; i++){       //for loop, for every instance, if index i of array is equal to the occurence youre
            if (arr[i] === target){                 //trying to find, push the index placement of that occurence into the new array
                occurences.push(i);
            }
        }
        return occurences;
    }
  };
});
