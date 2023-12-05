const Debounce = function (fn, delay) {
  let interval;
  return function (...args) {
    if (interval) clearTimeout(interval);
    interval = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const Throttle = function (fn, delay) {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
};
