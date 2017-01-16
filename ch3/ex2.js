const isEven = (n) => {
  if(n === 2){ return true; }
  else if(n === 1){ return false; }
  else{ return isEven(n-2); }
};

console.log(isEven(50));
