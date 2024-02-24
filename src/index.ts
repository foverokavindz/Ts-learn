console.log('Hellow world');

let hi: string = 'Kavinda';

// ----------------- Data types
let age: number = 25;
let studentName: string = 'Saman Kumara';
let isActive: boolean = true;

// null and undefined
let myOject: null = null;
let undefinedData: undefined = undefined;

// ===========================================
// Arrays
// two different ways to define arrays
let animals: Array<string> = ['', '', ''];
let vehicals: string[] = ['', '', ''];

// ========================================
// interface
interface Animal {
  name: string;
  breed: string;
  age: number;
}

// interface type
let dog: Animal = { name: 'Togo', breed: 'Husky', age: 1 };
console.log(dog.name);

//===================== functions - need output type or void
function getAgeAfterThreeY(age: number, name?: string): number {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log(`Hello age ${age}`);
  }
  return age + 3;
}
let myAge: number = getAgeAfterThreeY(10);
let myNewAge: number = getAgeAfterThreeY(25, 'Mahinda');
console.log(myAge);

// --------------------

function sayHello(message: string): void {
  //console.log('Message : '+message);
  console.log(`Message : ${message}`);
}

sayHello('Hello Folks!');

const helloIsuru = (message: string): void => {
  console.log(message);
};
helloIsuru('Hello!');

const helloIsuru22 = function (message: string): void {
  console.log(message);
};
helloIsuru22('Hello!');

function horekda(name: string, Thief?: boolean): void {
  if (Thief) {
    console.log(`${name} Horaaaa!`);
  } else {
    console.log(`${name} hoda amathi!`);
  }
}

horekda('Ranil', true);
horekda('Anura');

// =====================

function sum(numberOne: number, numberTwo = 10): void {
  console.log(numberOne + numberTwo);
}

//=================================
const rate: number = 1.5;
//rate=2.5;

// ====================================
// chnge type according to context
let myName = 'saman';
console.log(typeof myName);

// ============================

let numbers: number[] = [10, 20, 30, 40];
console.log(numbers[0]); // 10
//==============
let strings: Array<string> = ['', '', '', ''];

//==============
strings.push('10'); // add
strings.pop(); // rid the last elemnt
//==============

// ====> Tuple
let student: [string, number] = ['Saman', 20];
//======>
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let temp of numbers) {
  console.log(temp);
}

let names = ['Ranil', 'Mahinda', 'Basil'];
console.log(names);

//===============
for (let x = 0; x < names.length; x++) {
  //console.log(names[x]);
}
//=================
for (const temp of names) {
  console.log(temp);
}

// -------------------

function sumOfArray(...values: number[]): number {
  let count: number = 0;
  for (let temp of values) {
    count += temp;
  }
  return count;
}

console.log(sumOfArray(10, 20, 30, 40));

/*function sum1(num1:number, num2:number):number{
    return num1+num2;
}
function sum2(num1:number, num2:number, num3:number):number{
    return num1+num2+num3;
}
function sum3():number{
    return 0;
}*/

function sumFunctions(...values: number[]): number {
  let ttl = 0;
  for (const temp of values) {
    ttl += temp;
  }
  return ttl;
}

console.log(sumFunctions(10, 20)); // [10,20]
console.log(sumFunctions(10, 20, 30)); //[10,20,30]
console.log(sumFunctions()); //[]
