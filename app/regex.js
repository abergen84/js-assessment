if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /[0-9]/.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /([a-zA-Z])\1+/.test(str);
    },

    endsWithVowel : function(str) {
        return /.*[aeiouAEIOU]$/.test(str);
    },

    captureThreeNumbers : function(str) {
        var res = /([0-9]{3})/.exec(str);
        return res ? res[0] : false;
    },

    matchesPattern : function(str) {
        return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str);
    },
    isUSD : function(str) {
        return /^\$[0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2}){0,1}$/.test(str)
    }
  };
});
