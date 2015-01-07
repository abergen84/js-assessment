if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
    return {
        globals: function() {
          "use strict";
            var myObject = {  //needed to declare the variable here with "var"
                name: 'Jory'
            };

            return myObject;
        },

        functions: function(flag) {
          "use strict";
            var getValue;

            if (flag) {
                getValue = function() {   //order of the function syntax was incorrect
                    return 'a';
                }
            } else {
                getValue = function() {
                    return 'b';
                }
            }

            return getValue();
        },

        parseInt: function(num) {
            "use strict";
            return parseInt(num,10);
        },

        identity: function(val1, val2) {
          "use strict";
          if (val1 === val2){  //setup a simple if/else statement to return whether the 2 values match or not.
            return true;
          } else {
            return false;
          }
        }
    };
});
