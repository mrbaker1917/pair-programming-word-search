const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['M', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['M', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['A', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['R', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['S', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['I', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['U', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'AMMARSIOU');

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ['T', 'S', 'E', 'B', 'K', 'R', 'A', 'M'],
      ['M', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['M', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['A', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['R', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['S', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['I', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['U', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'MARKBEST');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertical backwards", function() {
    const result = wordSearch([
      ['T', 'S', 'E', 'B', 'K', 'R', 'Z', 'M'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['E', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['B', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['S', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['M', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['A', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['J', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JAMESBEST');

    assert.isTrue(result);
  });
});
