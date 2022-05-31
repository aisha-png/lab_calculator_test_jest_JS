"use strict";

// const sum = function(a, b){
//     return a + b;
// };
const sum = (a, b) => (a + b);

// const subtract = function(a, b){
//    return a - b;
// };
const subtract = (a, b) => (a - b);

// const multiply = function(a, b){
//     return a * b;
// };
const multiply = (a, b) => (a * b);

// const divide = function(a, b){
//     return a / b;
// };
const divide = (a, b) => (a / b);

// const modulus = function(a, b){
//     return a % b;
// };
const modulus = (a, b) => (a % b);

// const even = function isEven(n){
//     return n % 2 == 0;
// };
const even = (n) => (n % 2 == 0);

// const odd = function isOdd(n){
//     if (n % 2 >= 1){
//         return true;
//     }
//     return false;
// };
const odd = (n) => {
    if (n % 2 >= 1){
        return true;
    }
    return false;
}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
