
// Level 18: Deep vs Shallow Copy

// ----------------------------------
// Question 1: Shallow Copy Trap
// ----------------------------------
let obj1 = {
    name: "Jeken",
    address: {
        city: "Kathmandu"
    }
};

let obj2 = { ...obj1 };

obj2.address.city = "Lalitpur";

console.log(obj1.address.city);
// What will this print ?
// Why ?

// -------------------------------
// Answer:
// -------------------------------
/*
Lalitpur

Because spread operator makes a shallow copy.
It copies:
Primitive values (string, number)
But nested objects are copied by reference
So: obj1.address === obj2.address  → true
Both point to the SAME address object.
That’s why changing one changes the other.
*/

// =======================================================================

// ----------------------------------
// Question 2: How can you create a true deep copy ?
// ----------------------------------

// -------------------------------
// Answer: This is the correct modern approach --> let deepCopy = structuredClone(obj1);
// -------------------------------

