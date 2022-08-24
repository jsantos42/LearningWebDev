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

 console.log(sum(34,1));
