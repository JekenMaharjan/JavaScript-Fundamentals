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



