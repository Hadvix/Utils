/**
 * Wraps a function and measures its execution time using console.time.
 * @param {Function} fn - Function to be measured.
 * @param {string} label - Optional console.time label.
 * @returns {Function} Wrapped function.
 * @example
 * const timedFunction = time(myFunction, 'myFunctionTimer');
 * timedFunction(args);
 */
export function time(fn, label = fn?.name || 'timer') {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function');
  }

  return async function (...args) {
    console.time(label);

    try {
      return await fn.apply(this, args);
    } finally {
      console.timeEnd(label);
    }
  };
}
