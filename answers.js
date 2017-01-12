// Only the pos
// Write a function called printPositives that takes an array and uses the forEach 
// method to print only the positive numbers.

function printPositives(arr){
    arr.forEach(function(arg){
        if(arg >= 0){
            console.log(arg)
        }
    });
}

printPositives([ 3, -5, 7, -6, 4])
