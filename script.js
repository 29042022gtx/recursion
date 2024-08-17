function fibs(length) {
  const arr = [0, 1];
  for (let i = 2; i < length; i += 1) {
    const val = arr[i - 1] + arr[i - 2];
    arr.push(val);
  }
  return arr.slice(0, length);
}

function fibsRec(length = 1) {
  function subFibsRec(length = 1, arr = [0, 1]) {
    if (length <= 2) {
      return [];
    }
    const next = arr[0] + arr[1];
    const newArr = [arr[1], next];
    return [next].concat(subFibsRec(length - 1, newArr));
  }

  return [0, 1].concat(subFibsRec(length)).slice(0, length);
}

const n = 8;
console.log('Fibonacci');
const arr1 = fibs(n);
const arr2 = fibsRec(n);
console.log(arr1);
console.log(arr2);

function mergeSort(arr = []) {
  function merge(left, right) {
  const arr = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift())
      } else {
        arr.push(right.shift())
      }
    }
    return [...arr, ...left, ...right]
  }

  if (arr.length <= 1) {
    return arr
  }
  const mid = Math.round(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
let arr = [3, 2, 1, 13, 8, 5, 0, 1];
arr = mergeSort(arr);
console.log('Merge sort');
console.log(arr);
