
// Level 17: Class vs Prototype

// ----------------------------------
// Question 1: Class
// ----------------------------------
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hi " + this.name);
    }
}

let u = new User("Jeken");
u.greet();
// 1. What will this print ?
// 2. Is this true OOP like Java ?
// 3. Where is greet actually stored internally ?

// -------------------------------
// Answer:
// -------------------------------
/*
Hi Jeken

No.JavaScript classes are syntactic sugar over prototypes.
Internally it is still: User.prototype.greet
Java uses classical inheritance.
JavaScript uses prototypal inheritance.

Even though syntax looks similar, the mechanism is different.

Inside: User.prototype
NOT inside the instance u.

Internal Reality:
Even though we wrote: class User { ... }
JavaScript converts it roughly to:
function User(name) {
    this.name = name;
}

User.prototype.greet = function () {
    console.log("Hi " + this.name);
}
So class = cleaner syntax, same engine behavior.
*/




