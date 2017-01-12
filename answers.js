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

function getPositives(arr){
    arr.filter(function(item){
        if(item >= 0){
            console.log(item)
        }
    })
}

getPositives([ 3, -5, 7, -6, 4])
