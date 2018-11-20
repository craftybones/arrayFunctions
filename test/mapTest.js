const assert = require('assert');
const lib = require('./functionLib.js');
const map = lib.map;

//========================(map function map)==============\\

const square = function(number) {
  return number*number;
}

const squareRoot = function(number) {
  return Math.sqrt(number);
}

const mapTestWithSquare = function(){
  assert.deepEqual(map(square, [1]), [1]);
  assert.deepEqual(map(square, [1,2]), [1,4]);
  assert.deepEqual(map(square, [1,2,3,4]), [1,4,9,16]);
  console.log("mapTestWithSquare is passed");
}

const mapTestWithSquareRoot = function(){
  assert.deepEqual(map(squareRoot, [1]), [1]);
  assert.deepEqual(map(squareRoot, [1,4]), [1,2]);
  assert.deepEqual(map(squareRoot, [1,4,9,16]), [1,2,3,4]);
  console.log("mapTestWithSquareRoot is passed");
}

mapTestWithSquare();
mapTestWithSquareRoot();
