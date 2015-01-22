if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  "use strict";
  return {
    alterContext : function(fn, obj) {
    	obj.fn = fn;         //setting object.function = function
    	return obj.fn();     //executing function
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
		var res = [];
      	for (var prop in obj) {              //
        if (obj.hasOwnProperty(prop)) {       //test if the property exists in the object, and if so:
          res.push(prop + ": " + obj[prop]);  //push the property name and description to the empty array defined above
        }
      }
      return res;
    }
  };
});
