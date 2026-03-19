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





