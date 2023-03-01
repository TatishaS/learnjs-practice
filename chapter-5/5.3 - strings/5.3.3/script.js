const truncate = (str, maxlength) => {
  const result =
    str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;

  return result;
};

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));

console.log(truncate('Всем привет!', 20));
