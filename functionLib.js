const map = function(fnName, source) {
  let result = [];
  for(let index=0; index<source.length; index++) {
    result.push(fnName(source[index]));
  }
  return result;
}
exports.map = map;
