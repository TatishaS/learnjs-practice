let calculator = {
  read() {
    const first = +prompt('Первое значение');
    const second = +prompt('Второе значение');
    this.first = first;
    this.second = second;
  },

  sum() {
    return this.first + this.second;
  },

  mul() {
    return this.first * this.second;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
