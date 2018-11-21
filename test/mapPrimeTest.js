const assert = require('assert');
const { mapPrime } = require('../src/functionLib.js');

const square = function(number) {
  return number*number;
}

const squareRoot = function(number) {
  return Math.sqrt(number);
}

describe("mapPrime", function() {
  it("testing mapPrime with square function", function() {
  assert.deepEqual(mapPrime(square, [1]), [1]);
  assert.deepEqual(mapPrime(square, [1,2]), [1,4]);
  assert.deepEqual(mapPrime(square, [1,2,3,4]), [1,4,9,16]);
  });
  it("testing mapPrime with squareRoot function", function() {
  assert.deepEqual(mapPrime(squareRoot, [1]), [1]);
  assert.deepEqual(mapPrime(squareRoot, [1,4]), [1,2]);
  assert.deepEqual(mapPrime(squareRoot, [1,4,9,16]), [1,2,3,4]);
  });
});
