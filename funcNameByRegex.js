const funcs = `function mergeObj(mergeObj, currentIndex) {
    return Object.entries(currentIndex).reduce(keyAndValuePairs, mergeObj);
  };
  function keyAndValuePairs(mergeObj, element) {
    mergeObj[element[0]] =
      element[0] in mergeObj ? mergeObj[element[0]] + element[1] : element[1];
    return mergeObj;
  };

  function mergedObjects(objects) {
    return objects.reduce(mergeObj, {});
  };

  function filterEvenNumbers(numbers) {
    return numbers.filter((number) => !(number & 1));
  };
  `;

funcs
  .split("function")
  .map((string) => string.match(/\w+\(/))
  .filter((array) => array)
  .map((string) => string[0].match(/\w+/)[0]);
