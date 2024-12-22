const consolelog = function () {
  return 'pavani';
}

console.log(consolelog());

console.log = function () { }
console.log('siddi');

const findMinMax = function (initObj, currentNumber) {
  console.log("initObj", initObj); 
  console.log(currentNumber); 
  initObj.min = Math.min(initObj.min, currentNumber); 
  initObj.max = Math.max(initObj.max, currentNumber); 
  return initObj; 
};
  const result = [1, 2, 3, 4, 5].reduce(findMinMax, { min : Infinity, max : -Infinity }); 
  console.log(result);

