const transpose = function(matrix) {
  const matrixOutput = [];

  // Loop through each row in the matrix.
  for (let i = 0; i < matrix.length; i++) {
    // Loop through each element in the row.
    for (let j = 0; j < matrix[i].length; j++) {
      // For the first row, convert each element to a new row.
      if (i === 0) {
        matrixOutput.push([matrix[i][j]]);
      } else {
        // For all other elements, add it to the row.
        matrixOutput[j].push([matrix[i][j]]);
      }
    }
  }

  return matrixOutput;
};
  

const wordSearch = (letters, word) => {
  if (!letters) {
    return false;
  }

  // Remove whitespace from the word
  word = word.trim();

  // check if the word appears horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // check if the word appears vertically
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let v of verticalJoin) {
    if (v.includes(word)) return true;
  }

  return false;
};



module.exports = wordSearch;