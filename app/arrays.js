if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    "use strict";
  return {
    indexOf : function(arr, item) {
        for (var i = 0; i < arr.length; i++){
            if (arr[i] === item){
                return i;
            }
        }
            return -1;
    },

    sum : function(arr) {
        var total = 0;

        for (var i = 0; i < arr.length; i++){
            total += arr[i];
        }
        return total;
    },

    remove : function(arr, item) {
        for (var i = 0; i < arr.length; i++){
            if (arr[i] === item){
                arr.splice(i, 1)
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--){
            if(arr[i] === item){
                arr.splice(i,1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        var newarray = arr1.concat(arr2);
        return newarray;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var total = 0;

        for (var i = 0; i < arr.length; i++){
            if (arr[i] === item){
                total++;
            }
        }
        return total;
    },

    duplicates : function(arr) {
        //var sorted = arr.sort();
        var results = [];

        for (var i = 0; i < arr.length - 1; i++){
            if (arr[i+1] === arr[i]){
                results.push(arr[i]);
            }
        }
        return results;
    },

    square : function(arr) {
        for (var i = 0; i < arr.length; i++){
            arr[i] *= arr[i];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var occurences = [];

        for (var i = 0; i < arr.length; i++){
            if (arr[i] === target){
                occurences.push(i);
            }
        }
        return occurences;
    }
  };
});
