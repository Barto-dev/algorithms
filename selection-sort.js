/*selection sort*/
const findSmallest = (arr) => {
  // по умолчанию берем первый элемент массива как самый маленький
  let smallestEl = arr[0];
  let smallestIndex = 0;
  // пробегаемся по всему массиву и ищем элемент с наименшим значением
  for (let i = 0; i < arr.length; i++) {
    // если нашли элемент меньше первого, определяем его как наименьший
    if (arr[i] < smallestEl) {
      smallestEl = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

const selectionSort = (arr) => {
  const sortedArr = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const smallestElIndex = findSmallest(arr);
    sortedArr.push(arr[smallestElIndex]);
    arr.splice(smallestElIndex, 1);
  }
  return sortedArr;
}

let selectionSort2 = (arr) => {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    // первый элемент массива и есть минимальное значение 5
    let min = i;
    // j это следующий элемент массива, например в примере ниже это 3
    for (let j = i + 1; j < length; j++) {
      // если первый элемент массива больше следующего 5 > 3
      // минимальным становится 3
      // за один проход мы получаем самый маленкий элемент массива так как последовательно сравниваются два элемента
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    // если индекс минимального элемента и текущего это одно и то же то ничего менять не нужно
    if (min !== i) {
      // текущий элемент записываем во временную переменную
      let tmp = arr[i];
      // на место текущего элемента ставим наименший элемент
      arr[i] = arr[min];
      // на место наименшего элемень ставим текущий элемент
      arr[min] = tmp;
    }
  }
  return arr;
}

const array = [];
for (let i = 0; i < 10000; i++) {
  array.push(Math.floor(Math.random() * 20));
}

console.time('test');
selectionSort(array);
console.timeEnd('test');

/*
console.log(selectionSort2([5, 3, 6, 2, 10, 10, 1]));
console.log(selectionSort([5, 3, 6, 2, 10, 10, 1]));
*/
