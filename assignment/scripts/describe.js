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
//  There is a a variable called name that is set to "Dane".
// There is then a condiotnal statement where if the name is = to "mary" then the console logs "Hi, mary!"
// Otherwise it would the log "How do you do?"
// In this scenario we would expect to see "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE:
// We have two variables; secret, and code.
// the variable code is set to 123;
// The varible secret will be different depending on how our conditonal statement is setup 
// in the condiotnal statment if code === 123 secret would then be 'super' and code would then be multiplied by 2. 
// after multiplied the code is then 246 so the varible secret would stay as 'super'.

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
// We have 3 varibles: isStudent, age, and zip. Followed by a codnitonal statement.
// In the conditional our first condiotnal is if isStudent is true and the zip is less than 80000
// then we would see the console.log("You're a student on the west coast!")
// There are also a few else if statements that follows. 
// We would expect our output to be "You're a student---" since it is the first statement that is true in our block of else if statements.
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


// Code fix: First, the varibles need to be switched: colorOne should be lue and colorTwo should be red.
//and then when the colors are mixed we need both colorOne and colorTwo to 'purple'
// 



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
//

//Code fix: Based of of the descrption we need to adjust the condiontal statement
// instead of (temp > 39 || time >= 4) we should change that to an 'and' statement (temp > 39 && time >= 4) 
// if we left the code as is the computer would read it as "if temp is > than 39 OR time >=4"



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

//Code Fix: in this situation we need to adjust the conditonal statement  again 
// the descripton for the code is that age needs to be greater than or equal to 21.
// In the actaul code the conditional statement is minAge is less than or equal to age.
//  We can change the condtional to:


/* if( age >= minAge){
   console.log("enter"); }
    else{
consoel.log( 'no entry');
    }
   */ 



/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

