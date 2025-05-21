const array = [5, 12, 8, 10, 4, 6, 25, 17];

const mergeSort = function (array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));

  const right = mergeSort(array.slice(mid));

  return merge(left, right);
};

const merge = function (left, right) {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return sortedArray.concat(left, right);
};

console.log("mergeSort ", mergeSort(array));
