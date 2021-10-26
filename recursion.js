const testArr = [35, 1, 10, 1, 2, 3, 4, 25, 1, 243, 232];

const fact = (num) => {
  if (num === 1) {
    return 1
  } else {
    return num * fact(num - 1);
  }
};

// console.log(fact(10))

const calcArr = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let firstEl = arr.shift()
    return firstEl + calcArr(arr)
  }
}

// console.log(calcArr(testArr));

const findHighestNum = (arr) => {
  // базовый случай
  if (arr.length === 1) {
    return arr[0];

    // рекурсивный случай
  } else {
    // если первый элемент меньше второго то удаляем его, если нет то удаляем второй элемент
    // и так до тех пор пока не останется один элемент
    if (arr[0] < arr[1]) {
      arr.splice(0, 1)
    } else {
      arr.splice(1, 1)
    }
    return findHighestNum(arr);
  }
}

// console.log(findHighestNum(testArr));

const recursiveBinary = (arr, num) => {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor((low + high) / 2);

  if (arr.length === 1 || arr[mid] === num) {
    return arr[0]
  } else {


    if (arr[mid] < num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    let newArr = arr.slice(low, high)
    return recursiveBinary(newArr, num)
  }

}
