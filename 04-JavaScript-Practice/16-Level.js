
// Level 16: Prototype & Prototype Chain

// JavaScript uses prototypal inheritance, not classical inheritance.

// ----------------------------------
// Question 1: Constructor Function
// ----------------------------------
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("Hello " + this.name);
};

let p1 = new Person("Jeken");
p1.greet();
// 1. What will this print ?
// 2. Where is greet stored ?
// 3. Does every object get its own copy of greet ?

// -------------------------------
// Answer:
// -------------------------------
/*
Hello Jeken
Because:
p1.name = "Jeken"
greet() uses this.name

It is stored inside: Person.prototype
Not inside the object itself.
So memory structure looks like:
p1  --->  Person.prototype  --->  Object.prototype  ---> null

No.
All instances share the SAME greet function from Person.prototype.
This is memory efficient.
If 1000 objects are created:
- Only ONE greet exists in memory.
That’s the power of prototypal inheritance.
*/

// =======================================================================

// ----------------------------------
// Question 2: Prototype Chain
// ----------------------------------
// What will this output ?
let arr = [];
console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
// Explain what is happening here.

// -------------------------------
// Answer:
// -------------------------------
/*
true
true
null

Full Prototype Chain:

arr
↓
Array.prototype
↓
Object.prototype
↓
null

That’s how JavaScript inheritance really works.
*/
