// Problem #242

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const letra of s) {
    map.set(letra, (map.get(letra) || 0) + 1);
  }

  for (const letra of t) {
    if (!map.has(letra) || map.get(letra) === 0) {
      return false;
    }
    map.set(letra, map.get(letra) - 1);
  }
  return true;
};
