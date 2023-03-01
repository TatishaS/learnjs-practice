function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    let splitted = str.split(' '),
      a = +splitted[0],
      sign = splitted[1],
      b = +splitted[2];

    if (!this.methods[sign] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[sign](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
alert(result); // 8
