// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }, {a : 10, c: 13, d : 34}]) => { a: 6, b: 5, c: 4 }]

const mergekeyValues = [
  { a: 1, b: 2 },
  { b: 3, c: 4 },
  { a: 5 },
  { a: 10, c: 13, d: 34 },
];

const keyAndValuePairs = function (mergeObj, element) {
  mergeObj[element[0]] =
    element[0] in mergeObj ? mergeObj[element[0]] + element[1] : element[1];
  return mergeObj;
};

const mergeObj = function (mergeObj, currentIndex) {
  return Object.entries(currentIndex).reduce(keyAndValuePairs, mergeObj);
};

const mergedObjects = function (objects) {
  return objects.reduce(mergeObj, {});
};

const allFunction = `keyValue ${keyAndValuePairs} mergeObj ${mergeObj} mergedObject $ `;

console.log(mergedObjects(mergekeyValues));
