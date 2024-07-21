// 1. Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.

function reverseArray(arr) {

    let abc = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      abc.push(arr[i]);
    }
    return abc;
  }
  
  let small= [1, 2, 3, 4, 5];
  console.log(reverseArray(small)); 
  
let large = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(reverseArray(large)); 



// // 2. Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”

var arr = [4, -2,6,-5, 0, 2, -67, -8, 10, -34];


function getNegativeNumbers(array) {
  return array.filter(value => value < 0);
}
console.log(getNegativeNumbers(arr));




// var loop= [1,2,3,4,5,6,,78,9,0,1,5,]
// for (i=0;i<=10;i++){
//     console.log(loop)
// // }6. Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.


const minBy = (arr, fn) => {
    return Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
  };
  

  const crt = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
  console.log(minBy(crt, o => o.n)); 
  

//   10. Write a JavaScript program to find the index of an array item in a for loop.

const myArray = [10, 20, 30, 40, 50,];
const val = 30;
const index = myArray.indexOf(val);

if (index !== -1) {
    console.log(`Index of ${val}: ${index}`);
} else {
    console.log(`${val} not found in the array.`);
}





// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.

function newstring(str) {
    
    if (str.length >= 3) {
        
        const result_str = str.substring(str.length - 3);
    
        return result_str + result_str + result_str + result_str;
    } else {
        
        return false;
    }
}

console.log(newstring("JavaScript")); 



// 5.Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.







function check_numbers(x, y) {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        return true;
    } else {
        return false;
    }
}

console.log(check_numbers(12, 101)); // Output: false
console.log(check_numbers(52, 80));  // Output: true
console.log(check_numbers(15, 99));  // Output: true
