if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {                   //set a variable to equal jQuery deferred
    	var def = $.Deferred();

    	setTimeout(function(){                 //resolve the deferred object
    		def.resolve(value);
    	}, 10);

    	return def.promise();                  //execute the promise

    },

    manipulateRemoteData : function(url) {
    	var def = $.Deferred();
    	var peopleInArray = [];

    	//debugger;
        $.getJSON(url).then(function(data){         //jQuery promise function for getting JSON object from server, then once you obtain the info
    		data['people'].forEach(function(x){       //for each element in the people property from the data obtained from the server,
    			peopleInArray.push(x.name);          //push their name into the empty array you defined called peopleInArray.  
    		})
    		def.resolve(peopleInArray.sort());        //resolve the promise, sorting people in the array
    	})
    	return def.promise();                          //execute the promise

    }
  };
});
