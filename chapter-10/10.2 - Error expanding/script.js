class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'FormatError';
  }
}

let error = new FormatError('ошибка форматирования');

alert(error.message);
alert(error.name);
alert(error.stack);
alert(error instanceof SyntaxError);
alert(error instanceof FormatError);
