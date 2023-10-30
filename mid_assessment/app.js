// Map

function convertToUppercase(strings){  
    // the function convertToUppercase is taking in an array of strings
    return strings.map(function(item){
        // then we are using the map method to mapp over every array element
        return item.toUpperCase()
    })
    // to return a new array in the same length in all capital letters
}





// Example usage:
const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']


//Sort

// function sortNumbers(numbers){
//     // the function sort numbers is taking in an array of numbers
//     return numbers.sort(function(a, b){
//         // using the sort method we are sorting comparing 2 values & overwriting the original array
//         return a - b

//         // to return a new array in ascending order, it compares example 4 & 2 & if its positive it will sort it left. 
//     })
// }





// // Example usage:
// const numbers = [4, 2, 7, 1, 9, 5];
// const sortedNumbers = sortNumbers(numbers);
// console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]

function findEven(arr){
    return arr.filter(num => num % 2 === 0) 
        

}
console.log(findEven([1,2,3,4,5,6,7,8,9,10])) // [2,4,6,8,10]

//talk it out or ask questions

//psuedo code plan

//solve


//use filter()


// if statement 


