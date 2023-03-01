function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (const [person, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = person;
    }
  }

  return maxName;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
