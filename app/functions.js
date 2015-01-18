if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2){
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
        for (var i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
            return sum;
    },

    callIt : function(fn) {
        return fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
        
    },

    curryIt : function(fn) {

    }
  };
});
