// ====================================================================
// ARRAY PROBLEMS
// ====================================================================

// --------------------------------------------------------------------
// 1. Reverse an Array
// --------------------------------------------------------------------
function reverseArray(arr) {
    return arr.reverse();
}
console.log("Reverse of an array is " + reverseArray([1, 2, 3, 4, 5]));

// --------------------------------------------------------------------
// 2. Find the Largest Number in an Array
// --------------------------------------------------------------------

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
console.log("Maximum number in array is " + largest1([2, 1, 4, 5, 33, 55, 23]));

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
console.log("Maximum number in array is " + largest2([2, 3, 5, 2, 6, 11, 2, 24, 555, 22]));

// --------------------------------------------------------------------
// 3. Remove Duplicate Elements from an Array
// --------------------------------------------------------------------

// Create a function where,
// 1. Use [...new Set(array)].

function removeDuplicate(arr) {
    return [...new Set(arr)];
}
console.log("Array after removing duplicate value is " + removeDuplicate([1, 7, 3, 4, 5, 2, 3, 4, 5, 1, 2, 3, 4, 5, 26, 2, 6]));

// --------------------------------------------------------------------
// 4. Flatten an Array
// --------------------------------------------------------------------

// Problem: Convert a nested array into a single-level array.
// Example: [1, [2, 3], [4, [5]]] → [1, 2, 3, 4, 5]

// Create a function where,
// 1. Use function flat(Infinity).

function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log("Flatten Nested Array is " + flattenArray([2, 3, [1, 2, 4, 4], [2, 7, [8, 9]]]));

//The .flat() method flattens nested arrays.
// Infinity means it will flatten arrays at any level, no matter how deeply nested.

// --------------------------------------------------------------------
// 5. Find Missing Number in Array
// --------------------------------------------------------------------

function findMissing(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
}

console.log("Missing number is " + findMissing([1, 2, 3, 4, 6, 7, 8]));

// Alternative...
function findMissingNum(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;

    let sum = arr.reduce((a, b) => a + b, 0);

    return total - sum;
}

console.log("Missing number is " + findMissingNum([1, 2, 3, 5]));

// ====================================================================
// STRING PROBLEMS
// ====================================================================

// --------------------------------------------------------------------
// 1. Reverse a String
// --------------------------------------------------------------------

// Create a function where,
// 1. Split the string provided into letters in an array.
// 2. Reverse the elements of an array.
// 3. Finally then join the elements of an array.

function reverse(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse of a string is " + reverse("JEKEN MAHARJAN"));

// Explanation:
// split('') converts string to array
// reverse() reverses array
// join('') converts back to string

// --------------------------------------------------------------------
// 2. Count Vowels in a String
// --------------------------------------------------------------------

// Create a function where,
// 1. Declare vowels = 'aeiou' and use split to create an array for it.
// 2. Compare each element of array of vowels and given string array.
// 3. If its vowels in a string then increase the count starting from 0 in a loop.

function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";
    // const vowelsArr = vowels.toLowerCase().split("");
    const strArr = str.toLowerCase().split("");

    // for (let char of str.toLowerCase()) {
    //     if (vowels.includes(char)) {
    //         count++;
    //     }
    // }
    
    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i])) {
            count++;
        }
    }

    return count;
}
console.log("The count of vowels is " + countVowels("AeroPlane"));
console.log("The count of vowels is " + countVowels("Apple"));
console.log("The count of vowels is " + countVowels("kydn"));

// --------------------------------------------------------------------
// 3. Check if a String is a Palindrome
// --------------------------------------------------------------------

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

// --------------------------------------------------------------------
// 4. Capitalize First Letter
// --------------------------------------------------------------------

function capitalFirstLetter(str) {
    let strArr = str.split("");
    let firstLetter = strArr[0].toUpperCase();
    let otherLetter = "";
    for (let i = 1; i < str.length; i++) {
        otherLetter += strArr[i].toLowerCase();
    }
    return firstLetter + otherLetter;
}
console.log("Capitalize first letter -> " + capitalFirstLetter("oRaNgE"));

// Or,

function capitalFirstLetteR(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log("Capitalize first letter -> " + capitalFirstLetteR("oRaNgE"));

// --------------------------------------------------------------------
// 5. Check if Two Strings Are Anagrams
// --------------------------------------------------------------------

// Two strings are anagrams if they contain the same letters.
// Create a function where,
// 1. Get 2 string and split, sort and join them and then check if they are equal or not. So, If they are equal then its Anagrams...

function checkAnagrams(str1, str2) {
    const strOne = str1.split("").sort().join("");
    const strTwo = str2.split("").sort().join("");
    return strOne === strTwo;
}
console.log("Is two strings are Anagrams? -> " + checkAnagrams("listen", "silent"));

// --------------------------------------------------------------------
// 6. Check if Two Strings are Anagrams
// --------------------------------------------------------------------

// Problem: Two strings are anagrams if they contain the same letters in a different order.
// Example: "listen" and "silent" → true

function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();

    // Sort the letters and compare
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

// Explanation:
// split("") → convert string to array of characters
// sort() → sort letters alphabetically
// join("") → join letters back into a string
// If sorted strings match → anagrams

// ====================================================================
// Number Logic Problems
// ====================================================================

// --------------------------------------------------------------------
// 1. Check Even or Odd
// --------------------------------------------------------------------


// --------------------------------------------------------------------
// 2. Fibonacci Series
// --------------------------------------------------------------------


// --------------------------------------------------------------------
// 3. Factorial
// --------------------------------------------------------------------


// --------------------------------------------------------------------
// 4. Prime Number Check
// --------------------------------------------------------------------


// ====================================================================
// Object/Javascript Questions
// ====================================================================

// --------------------------------------------------------------------
// 1. Convert Array to Object
// --------------------------------------------------------------------


// --------------------------------------------------------------------
// 2. Loop Through Object
// --------------------------------------------------------------------


// ====================================================================
// Simple Logic Tasks
// ====================================================================

// --------------------------------------------------------------------
// 1. FizzBuzz (Very Popular Interview Question)
// --------------------------------------------------------------------

function fizzBuzz(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (((arr[i] % 3) === 0) && ((arr[i] % 5) === 0)) {
            console.log("Fizz Buzz");
        } else if ((arr[i] % 3) === 0) {
            console.log("Fizz");
        } else if ((arr[i] % 5) === 0) {
            console.log("Buzz");
        } else {
            console.log(arr[i]);
        }
    }
}
console.log("Fizz Buzz Problem...")
fizzBuzz([1, 2, 3, 4, 5, 15]);

// --------------------------------------------------------------------
// 2. Count Words in Sentence
// --------------------------------------------------------------------

function countWords(str) {
    const words = str.trim().split(" ");
    return (words.length);
}
console.log("Words count in sentence is " + countWords("Hello World"));

// --------------------------------------------------------------------
// 3. Reverse Words in a Sentence
// --------------------------------------------------------------------

// Reverse the words but keep the word characters correct.
function reverseWords(str) {
    let reversed = str.split(' ').reverse().join(' ');
    return reversed;
}

console.log(reverseWords("I love JavaScript"));

// ====================================================================
// Small Practical Tasks
// ====================================================================

// --------------------------------------------------------------------
// 1. Sort Numbers
// --------------------------------------------------------------------

function sortNum(arr) {
    const sorted = arr.sort((a, b) => a - b)
    return sorted;
}
console.log("Sorted Numbers are " + sortNum([20, 10, 4, 11, 3, 5]));

// --------------------------------------------------------------------
// 2. Sum of Array
// --------------------------------------------------------------------

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
console.log("Sum of Array is " + sumArr([1, 2, 3, 4, 5]))

// --------------------------------------------------------------------
// 3. Check if a Number is Even or Odd.
// --------------------------------------------------------------------

function evenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

console.log(evenOdd(15));

// Explanation:
// Use modulus % operator.

// --------------------------------------------------------------------
// 4. Factorial of a Number
// --------------------------------------------------------------------

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));

// --------------------------------------------------------------------
// 5. Find Second Largest Number
// --------------------------------------------------------------------



