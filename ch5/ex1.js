// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

let flatten = (array) => {
  return array.reduce((flatArray, item) => {
    return flatArray.concat(item);
  });
};

module.exports.flatten = flatten;