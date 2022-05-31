"use strict";

const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
   return a - b;
}

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    return a / b;
};

const modulus = function(a, b){
    return a % b;
};

const even = function isEven(n){
    return n % 2 == 0;
};

const odd = function isOdd(n){
    if (n % 2 >= 1){
        return true;
    }
    return false;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
