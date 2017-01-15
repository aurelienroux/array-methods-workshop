// Only the pos
// Write a function called printPositives that takes an array and uses the forEach 
// method to print only the positive numbers.

// function printPositives(arr){
//     arr.forEach(function(item){
//         if(item >= 0){
//             console.log(item)
//         }
//     });
// }

// printPositives([ 3, -5, 7, -6, 4])

//REFACTOR **************************************
// function printPositives(arr){
//     return arr.filter( (ele) => ele > 0)
//             .forEach( (ele) => console.log(ele));
// }



// Get positive
// Similar to the previous exercise, write a function called getPositives that 
// takes an array and uses the filter method to return a new array with 
// only the positive numbers.

// function getPositives(arr){
//     arr.filter(function(item){
//         if(item >= 0){
//             console.log(item)
//         }
//     })
// }

// getPositives([ 3, -5, 7, -6, 4])

//REFACTOR **************************************
// function printPositives(arr){
//     return arr.filter( (ele) => ele > 0)
//             .forEach( (ele) => console.log(ele));
// }





// Filter it out
// Re-do exercise 1 by first filtering the input array, and then printing the 
// numbers from the filtered array. Your code will look something like: 
// return arr.filter(...).forEach(...).

// function printPositives(arr){
//     arr.filter(function(item){
//         if( item >= 0 ){
//             return item
//         }
//     }).forEach(function(itemTwo){
//         console.log(itemTwo)
//     })
// }

// printPositives([ 3, -5, 7, -6, 4])

//REFACTOR **************************************
// function printPositives(arr){
//     return arr.filter( (ele) => ele > 0)
//             .forEach( (ele) => console.log(ele));
// }




// Filter Array
// Write a function called filterArray that takes a callback function and an 
// array as arguments. Your filterArray function should return a new array that 
// contains only the elements where the callback function returns true.
// NOTE: This is a trick question. The answer is a one-liner and you are 
// allowed to use array.filter :)

// function filterArray(callback, arr){
//     return arr.filter(callback)
// }

// console.log(filterArray((x => x > 5), [3,6,4,7,3,9]))






// The Longest Word
// Write a function called longestWord that takes a string as argument, and returns 
// the longest word in the string. You should use Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split to split the string into an array of words.

// function longestWord(str){
//         var strSplit = str.split(" ");
//         var sol = strSplit.reduce(function(a, b){
//         if( a.length < b.length){
//             return b
//         } else {
//             return a
//         }
//     })
//     return sol
// }

// console.log(longestWord("This is a sentence for an example"))

// //REFACTOR ***************************************
// function longestWord(str){
//     return str.split(" ").reduce( (a, b) => b.length > a.length ? b : a);
// } 

// console.log(longestWord("This is a sentence for an example"))






// I'd like to buy a vowel
// Write a function called countVowels that takes a string and returns the number 
// of vowels in the string. You should use Array.prototype.reduce to do your work.

// For the string "The quick brown fox", the output should be 5 because there is 
// one e, one u, one i and two os.

// Hint: You can use String.prototype.split again. There is a way to use it to 
// split a string by character. Try to Google it :)

// Hint 2: You can create an array of vowels and use Array.prototype.indexOf to 
// check if the current letter is a vowel.

// function countVowels(str){
//     var vowels = ["a","e","i","o","u"]
//     var strSplit = str.split("");
//     return strSplit.reduce(function(tmp, letter){
//         if(vowels.indexOf(letter) !== -1){
//             tmp.push(letter)
//         }
//         return tmp;
//     }, []).length
// }

// console.log(countVowels("The quick brown fox"))

//REFACTOR ES6**************************************

// function countVowels(arr){
//     var vowels = ["a", "e", "i", "o", "u"];
//     return arr.split("").reduce( (tmp, letter) => {
//         if(vowels.indexOf(letter) > 0){
//             tmp++;
//         }
//         return tmp;
//     }, 0);
// }

// console.log(countVowels("The quick brown fox"));





// High? Low?

// Write a function called highLow that takes an array of numbers, and returns an 
// object with a property highest containing the highest number, and a property 
// lowest containing the lowest number, using Array.prototype.reduce.

// For example, starting with [1, -10, 20, 40, 5], your function should return 
// {highest: 40, lowest: -10}.

// Hint: Javascript has a special value called Infinity, which is higher than any 
// other number. See if you can initialize your reduce accumulator with 
// Infinity and -Infinity :)

// function highLow(arr){
//     var high = arr.reduce(function(a,b){
//         if(b>a){
//             return b
//         } 
//         return a 
//     }, -Infinity)
//     var low = arr.reduce(function(a,b){
//         if (b<a){
//             return b
//         } 
//         return a
//     }, Infinity)
//     return {highest: high,lowest: low}
// }

// console.log(highLow([1, -10, 20, 40, 5]))

//REFACTOR ES6***********************************

// function highLow(arr){
//     var high = arr.reduce( (current, item) => (current < item ? item: current), -Infinity);
//     var low = arr.reduce( (current, item) => (current > item ? item: current), Infinity);
//     return {highest: high, lowest: low};
// }

// console.log(highLow([1, -10, 20, 40, 5]))





// Wheel of Fortune
// Write a function called countChars that takes a string, and returns an object 
// where the keys are letters, and the value is the number of 
// times that letter appears.

// function countChars(str){
//     var strSplit = str.split("");
//     var obj = {};
//     strSplit.forEach(function(item){
//         if(item in obj){
//             obj[item]++
//         } else {
//             obj[item] = 0;
//             obj[item]++;
//         }
//     })
    
//     return (obj)
//     // console.log(strSplit)
// }
// console.log(countChars("hello world"))


// //REFACTOR BUT NOT WORKING ***********************************************
// function countChars(str){
//     return str.split("").reduce((object, item) => { object[item] ? object[item]++: object[item] = 1; return object}, {});
// }


// //Nathaniel solution **********************************************
// function countCharNatSol(string) {
//     return string.split("").reduce((a, b) => {!a.b ? a.b=1 : a.b++; return a}, {})
// }
// console.log(countCharNatSol("hello world"))




// Functional Programming
// Let's take a break from calling array methods and think about a certain situation 
// that occurs with the filter method. Array.prototype.filter will filter out elements 
// where the callback function returns a falsy value. What if we wanted to do the opposite, 
// and filter out elements which return a truthy value?

// function negate(func) {
//     // your solution goes here
//     return function(x){
//         return !func(x);
//     }
// }

// // Original functions
// function isEven(num) {
//   return num % 2 === 0;
// }
// function isEmpty(someList) {
//   return someList.length === 0;
// }

// // New functions
// var isOdd = negate(isEven);
// var isNotEmpty = negate(isEmpty);

// console.log([1,2,3].filter(isEven)) // [2]
// console.log([1,2,3].filter(isOdd)) // [1,3]