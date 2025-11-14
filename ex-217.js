// Problem #217

const numsParaTeste = [1, 2, 3];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

// --- Chamada da função para testar ---
const resultado = containsDuplicate(numsParaTeste);
console.log(resultado); // A saída esperada é true
