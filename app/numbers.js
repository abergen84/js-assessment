if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var mask = 1 << (bit - 1);    //bit shifting

        return (num & mask) ? 1 : 0;
    },

    base10: function(str) {
        return parseInt(str, 2);    //easiest method to convert binary to a string
    },

    convertToBinary: function(num) {
        var str = '';
        for (var i = 0; i < 8; i++) {
        str = ((num & Math.pow(2, i)) ? '1' : '0') + str;
      }
      return str;
    },

    multiply: function(a, b) {
        
    }
  };
});

