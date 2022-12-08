"use strict";
/*
If having errors in node_modules, you need to either pass the --skipLibCheck
option to the tsc command or add that property to the compilerOptions in the
tsconfig.json file.

Do note that when input files are specified on the tsc command, tsconfig.json
files are ignored!! As it says in https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#using-tsconfigjson-or-jsconfigjson
[you can use tsconfig.json] "By invoking tsc with no input files, in which case
the compiler searches for the tsconfig.json file starting in the current
directory and continuing up the parent directory chain."
*/
const sum = (a, b) => {
    return a + b;
};
console.log(sum(35, 1));
//==============================================================================
// TYPESCRIPT TYPES
//==============================================================================
// BOOLEAN
let isReady = true;
// NUMBER
let myAge = 42;
// STRING (also works with template strings)
let skyColor = 'blue';
let quote = `I'm ${myAge} years old.`;
// ARRAYS
let animals1 = ['cat', 'dog', 'pig'];
let animals2 = ['mouse', 'snake'];
let years1 = [2000, 2001];
let years2 = [2002, 2003];
// OBJECTS (note that object is lowercase, do not confuse it with the JS Object)
let wizard = {
    name: 'john',
};
// NULL and UNDEFINED
let undefinedVar = undefined;
let nullVar = null;
// TUPLE
let myBasket = ['balls', 5];
// ENUM: this type should start with a capital letter
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let sizeName = Size[2]; // Medium
let sizeValue = Size.Small; // 1
let sizeType = Size.Large; // 3
// ANY: if widely used, defeats the purpose of TS. But can be temporarily useful
//to avoid committing to a type straight away when converting a JS codebase to TS
let whatever = 'CAREFUL WITH THIS ONE!';
whatever = 5;
whatever = Size;
whatever = myBasket;
whatever = null;
// VOID
let voidFunction1 = function () {
    console.log('void');
};
let voidFunction2 = () => {
    console.log('void');
};
// NEVER: no reachable endpoint nor return type
let error = () => {
    throw ('oops');
};
