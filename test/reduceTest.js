const assert = require('assert');
const { reduce } = require('../functionLib');

const greatestOfTwoNums = function(firstNumber, secondNumber = firstNumber) {
  return Math.max(firstNumber,secondNumber);
}

describe("reduce",function(){
  it("testing reduce to find greatest number of an array",function(){
    assert.deepEqual(reduce(greatestOfTwoNums,[1,3,2],3),3);
    assert.deepEqual(reduce(greatestOfTwoNums,[12,3,2],3),12);
    assert.deepEqual(reduce(greatestOfTwoNums,[],3),3);
  });
});
