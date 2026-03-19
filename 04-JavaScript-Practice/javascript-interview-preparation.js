// ====================================================================
// 1. Reverse a String
// ====================================================================

// Create a function where,
// 1. Split the string provided into letters in an array.
// 2. Reverse the elements of an array.
// 3. Finally then join the elements of an array.

function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("JEKEN MAHARJAN"));

// Explanation:
// split('') converts string to array
// reverse() reverses array
// join('') converts back to string

// ====================================================================
// 2. Check if a String is a Palindrome
// ====================================================================

// Create a function where,
// 1. Create const forward variable which is equal to string in lowercase.
// 2. Create const backward variable which is equal to string in lowercase, split, reverse and then join.
// 3. Check forward === backward and then return.

function palinDrome(str) {
    const forward = str.toLowerCase();
    const backward = str.toLowerCase().split("").reverse().join("");
    return (forward === backward);
}
console.log(palinDrome("Madam"));

// ====================================================================
// 3. Find the Largest Number in an Array
// ====================================================================

// Create a function where,
// 1. Use Math.max() function to get max/large number out of array.
// Or,
// 1. Let array[0] = temp.
// 2. For Loop on array starting from index 1 to the length of array.
//    -> If array[i] > temp, then largest = array[i] and continue loop.
// 3. Return largest -> which is the largest number in an Array.

function largest1(num) {
    return Math.max(...num);
}
console.log(largest1([2, 1, 4, 5, 33, 55, 23]));

// Or,

function largest2(num) {
    temp = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > temp) {
            temp = num[i];
        }
    }
    return largest = temp;
}
console.log(largest2([2, 3, 5, 2, 6, 11, 2, 24, 555, 22]));

// ====================================================================
// 4. Remove Duplicate Elements from an Array
// ====================================================================

// Create a function where,
// 1. Use [...new Set(array)].

function removeDuplicate(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicate([1, 7, 3, 4, 5, 2, 3, 4, 5, 1, 2, 3, 4, 5, 26, 2, 6]));
