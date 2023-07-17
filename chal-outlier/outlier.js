/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a function that takes the array as an argument and returns this “outlier” N.

Examples:

[2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
*/

function returnOutlier(array) {
  let remainder = 0;

  for (let i = 0; i < 3; i++) {// look at first three elements to determine type of array
    remainder += array[i] % 2;// use remainder to define the type of outlier. Potential results =>  odd = 2 || 3    even = 0 || 1
  }

  let remainderToFind = remainder > 1 ? 0 : 1; //if remainder > 1 look for even outlier otherwise outlier is odd.

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === remainderToFind) {
      return array[i]; // stop array once outlier is found
    }
  }
}

console.log(returnOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160 = even
console.log(returnOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11 = odd

