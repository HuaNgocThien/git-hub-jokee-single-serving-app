//miniMaxSum
function miniMaxSum(arr) {
  let sortArr = arr.sort(function (a, b) {
    return a - b;
  });

  let minSum = sortArr.slice(0, 4).reduce(function (a, b) {
    return a + b;
  });

  let maxSum = sortArr.slice(1, 5).reduce(function (a, b) {
    return a + b;
  });

  console.log(minSum + ' ' + maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);

//Max Number in Array
function maxNum(arr) {
  var arrLength = arr.length,
    max = -Infinity;
  while (arrLength--) {
    if (arr[arrLength] > max) {
      max = arr[arrLength];
    }
  }
  return max;
}
var myArray = [1, 2, 3, 4, 5];
var maxResult = maxNum(myArray);
console.log(maxResult);

//Min Number in Array
function minNum(arr) {
  var arrLength = arr.length,
    min = Infinity;
  while (arrLength--) {
    if (arr[arrLength] < min) {
      min = arr[arrLength];
    }
  }
  return min;
}
var minResult = minNum(myArray);
console.log(minResult);

//Find Even Numbers
function findEvenNumbers(array) {
  return array.filter(number => {
    return number % 2 === 0;
  });
}

var evenResult = findEvenNumbers(myArray);
console.log(evenResult);

//Find Odd Numbers
function findOddNumbers(array) {
  return array.filter(number => {
    return number % 2 !== 0;
  });
}

var oddResult = findOddNumbers(myArray);
console.log(oddResult);
