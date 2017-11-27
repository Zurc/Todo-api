// ***** Passing variables into functions *****

// var person = {
//   name: 'Andrew',
//   age: 21
// }

// function updatePerson(obj) {
//   // obj = {               // assign a new value, doesn't change the original
//   //   name: 'Andrew',
//   //   age: 24
//   // }
//   obj.age = 24   // assign new value to one of the obj properties, change the original
// }

// updatePerson(person);
// console.log(person)

// array example
var grades = [15, 27]

function addGrades(arr) {
  // arr = [34]   // assigning a new value, doesn't change the original arr
  // arr[0] = 45;  // assign new value to an element of arr change the original

  // example 2
  arr.push(55);   // updates de original arr

  // arr = [12, 45, 85]    // new variable inside function, doesn't change the original
}

addGrades(grades)
console.log(grades)

/* *****     DEBUGGER     *****

you can write 'debugger;' at any line in your code to see what's going on

on the terminal you need to run node: 
debug [file_name]

on our example could be: node debug variable-playground.js

de debugger always pause on the beginning, to go on one step further just type
cont
(short for continue)

to explore a value at some point and time just type
repl
by doing this we can inspect variables and functions inside our code
just type de variable name to see its value

we can modify eg. an array
array.push(23)

when we are done with the local variables we can do 
ctrl+c

and then we can continue
cont

when you don't want anymore debugging just type
kill
(and the program was terminated)

to leave the debugger completely just type
quit








*/