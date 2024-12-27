const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isOdd = (number) => (number & 1) === 0;

const makeGroups = function (array, func) {
  const newObj = {};
  for (const element of array) {
    const key = func(element);
    if (!newObj[key]) newObj[key] = [];
    newObj[key].push(element);
  }

  return newObj;
};

const rangeBase = function (number) {
  return number % 4;
};

const grouping = function (array) {
  return makeGroups(array, isOdd);
};

const group = function (func) {
  return function (object, value) {
    const key = func(value);
    if (!object[key]) object[key] = [];
    object[key].push(value);

    return object;
  };
};

const byReduce = function (array) {
  return array.reduce(group(isOdd), {});
};
