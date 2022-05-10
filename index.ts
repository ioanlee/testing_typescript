import * as _ from 'lodash';

async function hello() { console.log("hello world") }

let lucky = 23;         // implicit
// lucky = '23';        // gives an error, because var is number type
let lucky2: any = 23;   // 
lucky2 = '23'; 



// Create tsconfig.json
// $ tsc --init

// Compile code to JS 
// $ tsc index.ts