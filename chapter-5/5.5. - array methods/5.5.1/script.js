function filterRange(arr, a, b) {
  const result = arr.filter(item => {
    return a <= item && item <= b;
  });

  console.log(result);

  return result;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered); // 3,1 (совпадающие значения)
alert(arr); // 5,3,8,1 (без изменений)
