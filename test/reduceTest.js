const assert = require('assert');
const { reduce } = require('../src/functionLib');

const greatestOfTwoNums = function(firstNumber, secondNumber = firstNumber) {
  return Math.max(firstNumber,secondNumber);
}

const sumOfTwoNums = function(firstNumber, secondNumber= 0) {
  return firstNumber + secondNumber;
}

describe("reduce - testing reduce by using a initial value",function(){
  it("testing with single element array",function(){
    assert.deepEqual(reduce(greatestOfTwoNums,[5],3),5);
    assert.deepEqual(reduce(sumOfTwoNums, [1],2),3);
  });

  it("testing with multiple elements array", function() { 
    assert.deepEqual(reduce(greatestOfTwoNums,[1,3,2],3),3);
    assert.deepEqual(reduce(greatestOfTwoNums,[12,3,2],3),12);
    assert.deepEqual(reduce(sumOfTwoNums, [1,4,3],2),10);
  });

  it("testing with an array has an element 0 and an empty array", function(){
    assert.deepEqual(reduce(greatestOfTwoNums,[0],3),3);
    assert.deepEqual(reduce(sumOfTwoNums, [0],2),2);
    assert.deepEqual(reduce(greatestOfTwoNums,[-1],0),0);
    assert.deepEqual(reduce(greatestOfTwoNums,[],3),3);
    assert.deepEqual(reduce(sumOfTwoNums, [],2),2);
  });
});

describe("reduce - testing reduce by not using a initial value",function(){
  it("testing with single element array",function(){
    assert.deepEqual(reduce(greatestOfTwoNums,[5]),5);
    assert.deepEqual(reduce(sumOfTwoNums, [1]),1);
  });

  it("testing with multiple elements array", function() { 
    assert.deepEqual(reduce(greatestOfTwoNums,[1,3,2]),3);
    assert.deepEqual(reduce(greatestOfTwoNums,[12,3,2]),12);
    assert.deepEqual(reduce(sumOfTwoNums, [1,4,3]),8);
  });

  it("testing with an array which has zero as an element", function(){
    assert.deepEqual(reduce(greatestOfTwoNums,[0]),0);
    assert.deepEqual(reduce(sumOfTwoNums, [0]),0);
    assert.deepEqual(reduce(greatestOfTwoNums,[-1]),-1);
  });
});
