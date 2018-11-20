const map = function(fnName, source) {
  let result = [];
  for(let index=0; index<source.length; index++) {
    result.push(fnName(source[index]));
  }
  return result;
}

const filter = function(fnName, source) {
  let result = [];
  for (element of source) {
    !fnName(element)||result.push(element);
  }
  return result;
}

exports.filter = filter;
exports.map = map;
