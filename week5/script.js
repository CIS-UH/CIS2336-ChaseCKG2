// 1. define variables

// var, let, const
let name = 'John Doe'; // old way not really used anymore

let age = 10; // new way

const birthyear = 2000; // new way

// rule of thumb to declare a variable:
// 1. always declare;
// 2. always use cont if the value should not be changed
// 3. only use let if you can't use const 

console.log(name);
console.log(age);
console.log(birthyear);

const foo = [20, 30, 40];
foo [0] = 30;
console.log(foo);

// rules for naming variable: 
// 1. use letters, numbers, $, _
// 2. DO NOT name starting with a number.
// 3. case sensitive: x /= X
// 4. DO NOT use keywords/reserved words.
// 5. best practice: camelCase ex. firstNumber

const studentName = 'Alice';
// studentName = 'Bob';  <--- not allowed will error
let score = 90;

// different data types:
// 1. primitive types (simplest forms of data);
// 2. reference types (array, function, date, ... complex structure data)

// 1. primitive type:

// boolean (True or False)
let isStudent = true;
let hasLicense = false;

// number
let height = 21;
let temperature = 36.6;

// string
let greeting = 'Hello';
let response = "Hi thre";

// undefined -- declared but not initalized with a value
let notAssigned;

// null - no value
let emptyVar = null;
console.log(emptyVar);

// operations with variables 
// 1. arithmetic operation: + - x /.
let a =10;
let b =4;
let sum = a + b;
let diff = a - b;
let product = a*b;
let quotient = a/b;
console.log(sum, diff, product, quotient);

// 2. string concatenation:
let firstName = 'Hoo'
let lastName = 'Doe';
let fullName = firstName +' '+ lastName;
console.log(fullName)

// increment and decrement ++, --
let counter = 0;
counter ++;
counter --;
console.log(counter);

// 4. compound assignment: += -=, *= =/ .
let score1 = 10;
score1 += 5;   // will make score1 equal 15
score1 *= 2; // will make score1 equal 30
console.log(score1)

// 5. comparison operations: <, >, <=, >=, !=, !==, ===
let x = 10;
let y = '10'; // true
console.log(x == y); // false ('===' called strict equal, compare both value and datatype)

// 6. logical operatoins (&& (and), (or) ||, (not) !)
let isAdult = true;
let isMember = false;
console.log(isAdult && isMember);
console.log(isAdult || isMember);
console.log(!isAdult);

// operations involving a number and a string
let result1 = '3' + 10; // string concatenation
console.log(result1);
let result2 = '10' - '2'; // converted strings into numbers and does mathematic operation 10-2
console.log(result2);
let result3 = '10'*'2';
console.log(result3);
let result4 = 'four' / 2;
console.log(result4);
let result5 = 'four' * 2;
console.log(result5);


// 8. unary plus (+); convert a string to a number if the string is a valid numeric representation
let result6 = + '3';
let result7 = + 'three';

// 9. implicit converstion
let result8 = '10' - true;
let result9 = '20' - false;
console.log(result8); // = 10 - 1 which is 9
console.log(result9); // = 20 - 0 which is 20

// practice
let price = 100;
let tax = '20';
let total = price + +tax;
console.log(total);

// conditional statements
// 1. if .... else
if(total==120){
    console.log('Correct!')
}else{
    console.log('Incorrect!')
}

// [90,100], A
// [80,90), B
// [70,80), C
// [0,60), D
let testScore = 85;
if(testScore >=90){
    testScore = a;
}else if(testScore >= 80){
    testScore = 'B'
}else if(testScore >= 70){
    testScore ='C'
}else{
    testScore = 'D'
}
console.log(testScore);

// switch: to select one of many code blocks to be executed
function getSeason(number) {
    switch(number){
        case 1: console.log('Winter')
        break;
        case 2: console.log('Spring')
        break;
        case 3: console.log('Summber')
        case 4: console.log('Autumn')
        break;
        default:
            console.log('Invalid Number. Please enter 1, or 2, or 3, or 4')

    }

}

getSeason(1);
getSeason(8);

// while loop
let count = 20;
while (count > 10) {
    console.log(count)
    count--;
}
// do ... while loop
count = 10;
do {
    console.log(count);
    count ++;
} while (count < 20)

