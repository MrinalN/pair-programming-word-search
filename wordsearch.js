const transpose = function(matrix) {
  const result = [];
  for (let x = 0; x < matrix[0].length; x++) {
    const buffer = [];
    for (let y = 0; y < matrix.length; y++) {
      buffer.push(matrix[y][x]);
    }
    result.push(buffer);
  }
  return result;
};

const wordSearch = (letters, word) => {

  let transposedMatrix = transpose(letters);
  let result = false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      result = true;
    }

  }
  //console.log(transposedMatrix)

  const transposedMatrix1 = transposedMatrix.map(ls => ls.join(''));
  for (let x of transposedMatrix1) {
    console.log(x);
    if (x.includes(word)) {
      result = true;
    }

  }

  return result;
};


module.exports = wordSearch;
