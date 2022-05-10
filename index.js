"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function hello() {
    return __awaiter(this, void 0, void 0, function* () { console.log("hello world"); });
}
let lucky = 23; // implicit
// lucky = '23';        // gives an error, because var is number type
let lucky2 = 23; // 
lucky2 = '23';
// Create tsconfig.json
// $ tsc --init
// Compile code to JS 
// $ tsc index.ts
