/**
 * @param {[]} arr
 * @param {number} value
 */
const binarySearch = (arr, value) => {
  let low = 0;
  let high = arr.length - 1;
  const result = {
    steps: 0,
  }

  // пока эта часть не сократится до одного элемента, проверяем средний елемент
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];
    result.steps += 1;

    // если предположение и нужное значение совпадают, выходим из поиска и функции
    // возвращаем индекс значения которое ищем
    if (guess === value) {
      return {...result, mid};
    }

    // если предположение меньше значения которое мы ищем (например 50 < 75) устанавливаем нижнее значение как 51
    // и ищем в диапазоне 51 - 100

    if (guess < value) {
      low = mid + 1;

      // если предположение больше (напр. 70 > 50, устанавлиаем верхнее значение 70 - 1 = 69 и ищем в диапазоне 0 - 69
    } else if (guess > value) {
      high = mid - 1;
    }
  }
  return null;
}

const myList = [1, 3, 5, 7, 9, 10, 11, 14, 16];

console.log(binarySearch(myList, 17));
const complexity = Math.log2(myList.length);
console.log(complexity);
