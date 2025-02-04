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
// The first line of code is setting the value of the variable 'name' to 'Dane'
// The second line is setting a conditional of if the variable name is exactly equal to 'Mary'
// If the conditional is true it outputs a console log of 'Hi, Mary!' in the console
// Otherwise it outputs a console log of 'How do you do?' in the console

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
// the code is setting the value of varibale 'code' to '123' and secret is equal to the conditional based off of 'code'
// if code is equal to '123' then 'secret' becomes 'super' and code is multiplied by 2
// if code is greater than 250 then secret becomes 'duper'
// the last line is a console log of 'secret' which will output 'super' in the console

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
// the first lines are setting the value of the variables isStudent, age, and zip
// the next line is checking if isStudent is true and if zip is greater than 80000, if they are both true then the console log 'You're a student on the west coast!' statement will output in the console
// if it is not met the next line then checks whether isStudent is false or age is less than 30, if one is true then the console log will output 'What are your hobbies?' in the console
// if it is not met the next line then checks if isStudent is true, if it is the console log outputs 'Welcome to prime!' 
// if it is not met still then the final console log statement will output 'How about the weather?'

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
// -- FIX -- only colorOne is being set to 'purple' when in the description both were supposed to be set to 'purple'
// -- FIX -- The variables are also swapped in the description vs the actual code. colorOne should be blue and colorTwo should be red.

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
// -- FIX -- In the description it states that both variables have to be true for console.log to output but the code has || instead of &&, which means OR instead of AND

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
// --FIX-- the console.log statements need to be switched, otherwise it will say 'no entry' to people who are old enough and 'enter' to people who are too young

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

