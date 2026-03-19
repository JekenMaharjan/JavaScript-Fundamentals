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

// ====================================================================
// 5. Count Vowels in a String
// ====================================================================

// Create a function where,
// 1. Declare vowels = 'aeiou' and use split to create an array for it.
// 2. Compare each element of array of vowels and given string array.
// 3. If its vowels in a string then increase the count starting from 0 in a loop.

function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";
    // const vowelsArr = vowels.toLowerCase().split("");
    const strArr = str.toLowerCase().split("");

    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("AeroPlane"));
console.log(countVowels("Apple"));
console.log(countVowels("kydn"));

// ====================================================================
// 6. Flatten an Array
// ====================================================================

// Problem: Convert a nested array into a single-level array.
// Example: [1, [2, 3], [4, [5]]] → [1, 2, 3, 4, 5]

// Create a function where,
// 1. Use function flat(Infinity).

function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log(flattenArray([2, 3, [1, 2, 4, 4], [2, 7, [8, 9]]]));

//The .flat() method flattens nested arrays.
// Infinity means it will flatten arrays at any level, no matter how deeply nested.

// ====================================================================
// 7. Check if Two Strings Are Anagrams
// ====================================================================

// Two strings are anagrams if they contain the same letters.
// Create a function where,
// 1. Get 2 string and split, sort and join them and then check if they are equal or not. So, If they are equal then its Anagrams...

function checkAnagrams(str1, str2) {
    const strOne = str1.split("").sort().join("");
    const strTwo = str2.split("").sort().join("");
    return strOne === strTwo;
}
console.log(checkAnagrams("listen", "silent"));

// ====================================================================
// 8. Find Missing Number in Array
// ====================================================================

function findMissing(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
}

console.log(findMissing([1, 2, 3, 4, 6, 7, 8]));

// Alternative...
function findMissingNum(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;

    let sum = arr.reduce((a, b) => a + b, 0);

    return total - sum;
}

console.log(findMissingNum([1, 2, 3, 5]));


