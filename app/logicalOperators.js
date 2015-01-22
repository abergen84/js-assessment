if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
    	if (a || b){           //if a OR b are truthy, return true, otherwise return false
    		return true;
    	} else {
    		return false;
    	}
    },

    and : function(a, b) {      //if a AND b are truthy, return true. otherwise, return false
    	if (a && b){
    		return true;
    	} else {
    		return false;
    	}
    }
  };
});
