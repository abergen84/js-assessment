if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var def = $.Deferred();

    	setTimeout(function(){
    		def.resolve(value);
    	}, 10);

    	return def.promise();

    },

    manipulateRemoteData : function(url) {
    	var def = $.Deferred();
    	var peopleInArray = [];

    	$.getJSON(url).then(function(data){
    		data['people'].forEach(function(x){
    			peopleInArray.push(x.name);
    		})
    		def.resolve(peopleInArray.sort());
    	})
    	return def.promise();
    }
  };
});
