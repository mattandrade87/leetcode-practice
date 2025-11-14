// Problem #15

const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let resultados = [];

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let soma = nums[i] + nums[left] + nums[right];

      if (soma > 0) right--;
      else if (soma < 0) left++;
      else {
        resultados.push([nums[i], nums[left], nums[right]]);

        // move pra tras ate encontrar um numero diferente
        while (left < right && nums[left] === nums[left + 1]) left++;

        while (left < right && nums[right] === nums[right - 1]) right--;
      }
      left++;
      right--;
    }
  }

  return resultados;
};
