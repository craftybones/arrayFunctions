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

const reduce = function(reducer, source, initializer) {
  let sourceCopy = source.slice();
  if(initializer == undefined) {
    initializer = sourceCopy.splice(0,1)[0];
  }
  let result = initializer;
  for(let index=0; index<sourceCopy.length; index++) {
    result = reducer(result,sourceCopy[index]);
  }
  return result;
}

exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
