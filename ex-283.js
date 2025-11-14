// Problem #283

var inverteNums = function (nums) {
  let posicao = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      num[posicao] = nums[i];
      posicao++;
    }
  }

  for (let j = posicao; j < nums.length; i++) {
    num[j] = 0;
  }

  return nums;
};
