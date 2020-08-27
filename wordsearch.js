const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const backwardsJoin = letters.map(ls => ls.reverse().join(''));
  for (let l of backwardsJoin) {
    if (l.includes(word)) return true;
  }
  const transposedMatrix = [];
  for (let i = 0; i < letters[0].length; i++) {
    let tempArr = [];
    for (let m = 0; m < letters.length; m++) {
      tempArr.push(letters[m][i]);
    }
    transposedMatrix.push(tempArr);
  }
  const verticalJoin = transposedMatrix.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalBack = transposedMatrix.map(ls => ls.reverse().join(''));
  for (let l of verticalBack) {
    if (l.includes(word)) return true;
  }

  return false;
};
module.exports = wordSearch;

//diagonal - look through original matrix at [i=0]][m=0] i++ if letter is the first letter of our search...
//...then execute diagonal search in upward or downward
//OPtion 2: regex positive lookahead?? --