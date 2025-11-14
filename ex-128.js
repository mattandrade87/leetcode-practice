// Problem #128

const numsParaTeste = [100, 4, 200, 1, 3, 2, 6, 7, 8, 9, 10, 11];

const longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    let contador = 1;

    if (!numsSet.has(num - 1)) {
      let numAtual = num;
      while (numsSet.has(numAtual + 1)) {
        contador++;
        numAtual++;
      }

      longest = Math.max(contador, longest);
    }
  }

  return longest;
};

const resultado = longestConsecutive(numsParaTeste);
console.log(resultado);
