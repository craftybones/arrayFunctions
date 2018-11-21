const assert = require('assert');
const { reduce } = require('../src/functionLib');

const greatestOfTwoNums = function(firstNumber, secondNumber = firstNumber) {
  return Math.max(firstNumber,secondNumber);
}

const sumOfTwoNums = function(firstNumber, secondNumber= 0) {
  return firstNumber + secondNumber;
}

describe("reduce - testing reduce by using a initial value",function(){
  it("testing reduce to find greatest number of an array",function(){
    assert.deepEqual(reduce(greatestOfTwoNums,[1,3,2],3),3);
    assert.deepEqual(reduce(greatestOfTwoNums,[12,3,2],3),12);
    assert.deepEqual(reduce(greatestOfTwoNums,[],3),3);
  });

  it("testing reduce to find sum of given list", function(){
    assert.deepEqual(reduce(sumOfTwoNums, [1,4,3],2),10);
    assert.deepEqual(reduce(sumOfTwoNums, [1],2),3);
    assert.deepEqual(reduce(sumOfTwoNums, [],2),2);
  });
});

describe("reduce - testing reduce by not using a initial value",function(){
  it("testing reduce to find greatest number of an array",function(){
    assert.deepEqual(reduce(greatestOfTwoNums,[1,3,2]),3);
    assert.deepEqual(reduce(greatestOfTwoNums,[12,3,2]),12);
    assert.deepEqual(reduce(greatestOfTwoNums,[1]),1);
  });

  it("testing reduce to find sum of given list", function(){
    assert.deepEqual(reduce(sumOfTwoNums, [1,4,3]),8);
    assert.deepEqual(reduce(sumOfTwoNums, [1]),1);
    assert.deepEqual(reduce(sumOfTwoNums, [4]),4);
  });
});
