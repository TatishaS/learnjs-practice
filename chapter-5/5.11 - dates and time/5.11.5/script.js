function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

getLastDayOfMonth(2012, 1); //29 (високосный год, февраль).
