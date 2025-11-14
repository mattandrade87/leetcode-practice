// Problem #49

const groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const arrayLetras = str.split("").sort().join("");

    if (map.has(arrayLetras)) {
      map.get(arrayLetras).push(str);
    } else {
      map.set(arrayLetras, [str]);
    }
  }
  return Array.from(map.values());
};
