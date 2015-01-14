if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  "use strict";
  return {
    alterContext : function(fn, obj) {
    	obj.fn = fn;
    	return obj.fn();
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
		var res = [];
      	for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          res.push(prop + ": " + obj[prop]);
        }
      }
      return res;
    }
  };
});
