const map = function(mapper, source) {
  let result = [];
  for(let index=0; index<source.length; index++) {
    result.push(mapper(source[index]));
  }
  return result;
}

const filter = function(predicate, source) {
  let result = [];
  for (element of source) {
    !predicate(element)||result.push(element);
  }
  return result;
}

const reduce = function(reducingFn, source, initializer) {
  let sourceCopy = source.slice();
  if(initializer == undefined) {
    initializer = sourceCopy.shift();
  }
  let result = initializer;
  for(let index=0; index<sourceCopy.length; index++) {
    result = reducingFn(result,sourceCopy[index]);
  }
  return result;
}

const reducingFn = function(mapper) { 
  return function(initialValue,element) {
    initialValue.push(mapper(element));
    return initialValue;
  }
}

const mapPrime = function(mapper, src) {
  return reduce(reducingFn(mapper), src, []);
}

const predicateGenerator = function(predicate) { 
  return function(initialValue,element) {
    if(predicate(element)){
    initialValue.push(element);
    }
    return initialValue;
  }
}

const filterPrime = function(predicate, source) {
  return reduce(predicateGenerator(predicate),source,[]);
}

exports.mapPrime = mapPrime;
exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
exports.filterPrime = filterPrime;
