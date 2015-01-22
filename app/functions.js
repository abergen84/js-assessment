if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);         //the apply method takes a function and applies an array to it
    },

    speak : function(fn, obj) {             //the call method is like apply, but accepts an argument list, not just a single array of 
        return fn.call(obj);                //arguments
    },

    functionFunction : function(str) {      //just call a function within a function, giving the new function a parameter for the 2nd string,
        return function(str2){              //and then combining them
            return str + ', ' + str2;
        }
    },

    makeClosures : function(arr, fn) {
        var res = [];
        for (var i = 0; i < arr.length; i++){
            res.push((function(num){
                return function(){
                    return fn(num);
                }
            })(arr[i]));
        }
        return res;
    },

    partial : function(fn, str1, str2) {        
        return function(x){
            return fn(str1, str2, x);
        }
    },

    useArguments : function() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++){  //since no definitive array is given, can use the default arguments property that is part of JS
            sum += arguments[i];                        //for every parameter given, it will add it to the sum variable. 
        }                                               //here, "argument" represents a, b, c, d, etc. if given a, b, c, d, argument[0] = a
            return sum;                                 //argument[1] = b, etc. 
    },

    callIt : function(fn) {
        return fn.apply(null, Array.prototype.slice.call(arguments, 1));   //slice can be used with call to to convert array-like objects
    },                                                                      //and collections to a new Array.

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
