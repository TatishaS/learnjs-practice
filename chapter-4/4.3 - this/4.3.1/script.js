function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // this будет undefined, т.к. makeUser это обычный вызов функциию. поэтому alert выдаст ошибку
