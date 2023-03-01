let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    if (key) return false;
  }
  return true;
}

alert(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

alert(isEmpty(schedule)); // false
