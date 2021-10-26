const quickSort = (arr) => {
  // базовый случай
  if (arr.length < 2) {
    return arr
  } else {
    // рекурсивный случай
    let pivot = arr[0];
    // подмассив из элементов меньших за опорный элемент
    let less = arr
      .slice(1)
      // оставляем только те элементы которые меньше опорного
      .filter((el) => el <= pivot);
    // подмассив из элементов больше за опорный элемент

    let greater = arr.slice(1).filter((el) => el > pivot);

    return quickSort(less).concat([pivot], quickSort(greater));
  }
}

console.log(quickSort([10, 5, 2, 3]));
