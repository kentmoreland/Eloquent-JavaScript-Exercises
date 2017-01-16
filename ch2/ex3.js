// Chess board

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #


const chessBoard = (size) => {
  let line = '', nl = size + 1;
  let length = size * nl;

  for(let i=1; i<=length; i++)
  { i%nl===0 ? line+='\n':i%2===0?line+=' ':line+='#'; }

  console.log(line);
};

chessBoard(8);