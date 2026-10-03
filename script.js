function debounce(callback, delay, immediate = false) {
  let timeoutId = null;

  return function (...args) {
    const context = this;
    const callNow = immediate && timeoutId === null;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    }, delay);

    if (callNow) {
      callback.apply(context, args);
    }
  };
}

module.exports = debounce;