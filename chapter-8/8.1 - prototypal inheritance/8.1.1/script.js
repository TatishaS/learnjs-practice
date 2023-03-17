let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps); // ? true, берётся из rabbit.

delete rabbit.jumps;

alert(rabbit.jumps); // ? null, берётся из animal.

delete animal.jumps;

alert(rabbit.jumps); // ? undefined, такого свойства больше нет.
