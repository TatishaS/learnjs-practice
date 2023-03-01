let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys()); // чтобы превратить iterable в массив
console.log(keys);

keys.push('more');
