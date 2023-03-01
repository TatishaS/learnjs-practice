function camelize(str) {
  const result = str
    .split('-')
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
  console.log(result);
  return result;
}

camelize('background-color');
camelize('list-style-image');
camelize('-webkit-transition');
