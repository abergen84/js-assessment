if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	"use strict";
  return {
    createModule : function(str1, str2) {
    	return {
    		greeting: str1,           //setting up an object with properties greeting and name
    		name: str2,
    		
    		sayIt: function(){        //method inside object, function called sayIt, which returns the greeting and the name
    			return this.greeting + ", " + this.name;
    		}
    	};
    }
  };
});
