function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (item < a || item > b) {
      arr.splice(i, 1);
      i--;
    }
  }

  console.log(arr);
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert(arr); // [3, 1]
