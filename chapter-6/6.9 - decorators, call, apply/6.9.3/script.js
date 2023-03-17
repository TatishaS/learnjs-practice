function debounce(f, ms) {
  let isWaiting = false;

  return function () {
    if (isWaiting) return;

    f.apply(this, arguments);

    isWaiting = true;

    setTimeout(() => (isWaiting = false), ms);
  };
}
