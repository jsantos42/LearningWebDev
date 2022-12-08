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

const sum = (a: number, b: number) => {
    return a + b;
}

console.log(sum(35,1));

//==============================================================================
// TYPESCRIPT TYPES
//==============================================================================
// BOOLEAN
let isReady: boolean = true;

// NUMBER
let myAge: number = 42;

// STRING (also works with template strings)
let skyColor: string = 'blue';
let quote: string = `I'm ${myAge} years old.`;

// ARRAYS
let animals1: string[] = ['cat', 'dog', 'pig'];
let animals2: Array<string> = ['mouse', 'snake'];
let years1: number[] = [2000, 2001];
let years2: Array<number> = [2002, 2003];

// OBJECTS (note that object is lowercase, do not confuse it with the JS Object)
let wizard: object = {
	name: 'john',
}

// NULL and UNDEFINED
let undefinedVar: undefined = undefined;
let nullVar: null = null;

// TUPLE
let myBasket: [string, number] = ['balls', 5];

// ENUM: this type should start with a capital letter
enum Size{Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];			// Medium
let sizeValue: number = Size.Small;		// 1
let sizeType: Size = Size.Large;		// 3

// ANY: if widely used, defeats the purpose of TS. But can be temporarily useful
//to avoid committing to a type straight away when converting a JS codebase to TS
let whatever: any = 'CAREFUL WITH THIS ONE!';
whatever = 5;
whatever = Size;
whatever = myBasket;
whatever = null;

// VOID
let voidFunction1 = function(): void {
	console.log('void');
}

let voidFunction2 = (): void => {
	console.log('void');
}

// NEVER: no reachable endpoint nor return type
let error = (): never => {
	throw('oops');
}

// INTERFACE: this type should start with a capital letter; creates a new type
interface RobotArmy {
	count: number,
	type: string,
	magic: string
}

// TYPE ALIAS: Type aliases and interfaces are very similar, and in many cases
//you can choose between them freely. Almost all features of an interface are
//available in type, the key distinction is that a type cannot be re-opened to
//add new properties vs an interface which is always extendable.
// From: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// Also check: https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
type RobotArmy2 = {
	count: number,
	type: string,
	magic: string
}

