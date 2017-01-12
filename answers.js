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


// Filter Array
// Write a function called filterArray that takes a callback function and an 
// array as arguments. Your filterArray function should return a new array that 
// contains only the elements where the callback function returns true.
// NOTE: This is a trick question. The answer is a one-liner and you are 
// allowed to use array.filter :)

function filterArray(callback, arr){
    return arr.filter(callback)
}

console.log(filterArray((x => x > 5), [3,6,4,7,3,9]))