// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Created a variable called name and set assigned name to the string Dane.
// Created a conditional that logs 'Hi, Mary!' to the console if name is equal in value and type to 'Mary', and otherwise logs 'How do you do?' to the console.
// We console.log('How do you do?') because name is not 'Mary'.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Created a variable called secret without an initial value.
// Created variable called code and assigned code to the number 123.
// Checking if code is equal in value and type to 123. If it is, then secret is assignmed the value of the string 'super' and the value of code is multiplied by 2. code is equal in value and type to 123, so now secret = 'super' and code = 246.
// Checking if the value of code is greater than 250. If it is, the value of secret is assigned to the string 'duper'. code is not greater than 250, so that code block is skipped.
// We console.log(secret) and get 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Created a variable called isStudent and assigned isStudent a value of the boolean true. Created a variable called age and assigned age the value of the number 34. Created a variable called zip and assigned zip the value of the number 55407.
// Created an if, else if, else if, else conditional. The conditional first checks if both isStudent is true AND if zip is greater than 8000. If both are true, 'You're a student on the West Coast' is logged to the console. If both are not true, the code jumps to the first else if and checks if isStudent is false OR is age less than 30. If one of those is true, 'What are your hobbies' is logged to the console. If neither of those are true, the code jumps to the second else if and checks if isStudent is true. If isStudent is true, 'Welcome to Prime!' is logged to the console. If isStudent is false, the code jumps to the else statement, which logs 'How about the weather?' to the console.
// console.log 'Welcome to Prime!' because isStudent is true and that is the first true statement in the conditional.
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

