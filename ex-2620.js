// Problem #2620

const createCounter = function (n) {
  let num = n;

  return function contador() {
    return num++;
  };
};
