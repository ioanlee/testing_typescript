// import * as _ from 'lodash';

// variables
let lucky = 23         // implicit, this cannot get any other type later
let lucky2: any = 23
lucky2 = '23'

// functions
function pow(x:number, y:number):string {
    return Math.pow(x,y).toString()
}

// arrays
type MyListType = [number?, string?, boolean?]
const arr: MyListType = []
arr.push(1)
arr.push('23')
arr.push(false)
console.log('1')

// console
// $ tsc --init     // Create tsconfig.json
// $ tsc index.ts   // Compile code to JS 