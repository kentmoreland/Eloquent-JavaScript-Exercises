// Reversing an array

// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.




// const reverseArray = (array) => {
//   let newArray = [];
//   for(i=array.length-1; i>=0; i--){ newArray.push(array[i]); }
//   return newArray;
// };


//Functional solution
const reverseArray = (array) => {
  return array.reduceRight((arr, item) => {arr.push(item); return arr; },[]);
};

const reverseArrayInPlace = (array) => {
  let first = 0, last = array.length - 1;
  let temp;
  while(first < last){
    temp = array[first];
    array[first] = array[last];
    array[last] = temp;
    first++;
    last--;
  }
  return array;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
