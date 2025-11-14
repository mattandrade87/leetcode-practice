// Problem #01
// Feito com Hashmap

const twoSum = function (nums, target) {
  const map = new Map();
  let resultado = [];

  for (const num of nums) {
    let complemento = target - num;

    if (map.has(complemento)) resultado.push([num, complemento]);

    map.set(num, complemento);
  }

  console.log(map);

  return resultado;
};
