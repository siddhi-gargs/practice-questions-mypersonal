// sumOf([1, 2, 3, 4]) => 10

const sum = function (sum, currentNum) {
  return currentNum + sum;
};

const sumOf = function (numbers) {
  return numbers.reduce(sum, 0);
};

console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24

const product = function (product, currentNum) {
  return product * currentNum;
};

const productOf = function (numbers) {
  return numbers.reduce(product, 1);
};
console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return sumOf(numbers) / numbers.length;
};

console.log(averageOf([1, 2, 3, 4, 5]));

const findMin = function (refvalue, comparator) {
  return Math.min(refvalue, comparator);
};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce(findMin, Infinity);
};
console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const findMaximum = function (refValue, comparator) {
  return Math.max(refValue, comparator);
};

const maxOf = function (numbers) {
  return numbers.reduce(findMaximum, -Infinity);
};
console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4

const addIfPositive = function (ref, value) {
  return value > 0 ? ref + value : ref;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.reduce(addIfPositive, 0);
};

console.log(sumPositiveNumbers([1, -2, 3, -4]));

const addSquares = function (currentSum, currentNum) {
  return currentSum + currentNum * currentNum;
};

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  return numbers.reduce(addSquares, 0);
};

console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const addSquaresOfOdd = function (currentSum, currentNum) {
  return currentNum & 1 ? currentNum + currentSum : currentNum;
};

const sumOfOddNumbers = function (numbers) {
  return numbers.reduce(addSquaresOfOdd, 0);
};

console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

const increIfNegative = function (count, currentNumber) {
  return currentNumber < 0 ? count + 1 : count;
};

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.reduce(increIfNegative, 0);
};
console.log(countNegativeNumbers([1, -2, 3, -4]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20

const squaresOfEven = function (currentSum, currentValue) {
  return currentValue & 1 ? currentSum : addSquares(currentSum, currentValue);
};

const findSumOfEvenSquares = function (numbers) {
  return numbers.reduce(squaresOfEven, 0);
};

console.log(findSumOfEvenSquares([1, 2, 3, 4]));

const concatnation = function (concatedString, string) {
  return concatedString + string;
};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(concatnation, "");
};

console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const replaceLongestString = function (previousString, string) {
  return previousString.length > string.length ? previousString : string;
};

const longestWord = function (words) {
  return words.reduce(replaceLongestString, "");
};

console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {};

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {};

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {};

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {};

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {};

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) {};

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {};

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) {};

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {};

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {};

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {};

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {};

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) {};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergekeyValues = [
  { a: 1, b: 2 },
  { b: 3, c: 4 },
  { a: 5 },
  { a: 10, c: 13, d: 34 },
];

const keyAndValuePairs = function (mergeObj, [key, value]) {
  mergeObj[key] = key in mergeObj ? mergeObj[key] + value : value;
  return mergeObj;
};

const mergeObj = function (mergeObj, currentIndex) {
  return Object.entries(currentIndex).reduce(keyAndValuePairs, mergeObj);
};

const mergedObjects = function (objects) {
  return objects.reduce(mergeObj, {});
};

console.log(mergedObjects(mergekeyValues));

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }

const associateWithValues = function (valueArray) {
  return function (merOb, keys, index) {
    merOb[keys] = valueArray[index];
    return merOb;
  };
};

const zip = function (keys, values) {
  return keys.reduce(associateWithValues(values), {});
};

console.log(zip(["a", "b", "c"], [1, 2, 3]));

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {
  return keys.reduce(associateWithValues(values), {});
};

console.log(makeObject([ "city", "country" ], [ "Paris", "France" ]));

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }

const invertObject = function (obj) {
  return Object.entries(obj).reduce((replaced, [ key, value ]) => {
    replaced[ value ] = key;
    return replaced;
  }, {});
};

console.log(invertObject({ "a": 1, "b": 2, "c": 3 }));

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {};

const mergeDuplicate = function (existingArray, value) {};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]

const mergeConsecutiveDuplicates = function (array) {
  return array.reduce((prev, ));
};

console.log(mergeConsecutiveDuplicates([1, 1, 1, 2, 3, 3, 4]));

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
// const longestConsecutiveSubsequence = function (numbers) {};

// const topK = function (k) {
//   const count = {};
//   return function (existingCount, value) {
//     console.log("existingCount", existingCount);
//     console.log("value", value);
//     if (!existingCount.includes(value)) {
//       existingCount.push(value);
//     }

//     return existingCount;
//   };
// };

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {
  const uniqueNumbers = numbers.reduce(topK(k), []);
  console.log("uniqueNumbers", uniqueNumbers);
  return uniqueNumbers;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

const possibility = function (arr2) {
  return function (initArr, value) {
    return initArr.concat(arr2.map((y) => [value, y]));
  };
};

const cartesianProduct = function (arr1, arr2) {
  return arr1.reduce(possibility(arr2), []);
};

console.log(cartesianProduct([1, 2], ["a", "b", "c"]));

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }

const distributedDate = [
  { date: "2024-01-01", value: 10 },
  { date: "2024-01-01", value: 20 },
  { date: "2024-01-02", value: 30 },
  { date: "2024-01-02", value: 67 },
];

const dateWithAssociativeValue = function (dateAndValue, currentDateAndValue) {
  if (dateAndValue[currentDateAndValue.date]) {
    dateAndValue[currentDateAndValue.date] = [
      dateAndValue[currentDateAndValue.date],
      currentDateAndValue.value,
    ].flat();
  } else {
    dateAndValue[currentDateAndValue.date] = currentDateAndValue.value;
  }

  return dateAndValue;
};

const groupByDate = function (records) {
  return records.reduce(dateWithAssociativeValue, {});
};

console.log(groupByDate(distributedDate));

console.log = function () {};
// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (initObj, currentNumber) {
  initObj.min = Math.min(initObj.min, currentNumber);
  initObj.max = Math.max(initObj.max, currentNumber);
  return initObj;
};

const result = [1, 2, 3, 4, 5].reduce(findMinMax, {
  min: Infinity,
  max: -Infinity,
});
console.log(result);

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }

const list = [
  { category: "A", value: 10 },
  { category: "B", value: 20 },
  { category: "A", value: 30 },
];

const sumOfValue = function (accumulate, option) {
  if (accumulate[option.category]) {
    accumulate[option.category] += option.value;
  } else {
    accumulate[option.category] = option.value;
  }
  return accumulate;
};

const sumByCategory = function (items) {
  return items.reduce(sumOfValue, {});
};

console.log(sumByCategory(list));
