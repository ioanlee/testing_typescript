"use strict";
// import * as _ from 'lodash';
// variables
let lucky = 23; // implicit, this cannot get any other type later
let lucky2 = 23;
lucky2 = '23';
// functions
function pow(x, y) {
    return Math.pow(x, y).toString();
}
const arr = [];
arr.push(1);
arr.push('23');
arr.push(false);
console.log('1');
// console
// $ tsc --init     // Create tsconfig.json
// $ tsc index.ts   // Compile code to JS 
