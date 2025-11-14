// Problem #167

function twoSum(array, target) {
  let left = 0;
  let right = array.length - 1;
  let result;

  for (let i = 0; i < array.length; i++) {
    result = array[left] + array[right];

    if (result === target) return [left + 1, right + 1];
    else if (result > target) right--;
    else if (result < target) left++;
  }

  return false;
}
