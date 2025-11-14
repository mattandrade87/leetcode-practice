// Problem #643

var findMaxAverage = function (nums, k) {
  let mediaMaxima = -Infinity;
  let mediaJanela = 0;
  let inicioJanela = 0;

  for (let i = 0; i < nums.length; i++) {
    mediaJanela += nums[i];

    if (i >= k - 1) {
      let mediaAtual = mediaJanela / k;

      mediaMaxima = Math.max(mediaMaxima, mediaAtual);

      mediaJanela -= nums[inicioJanela];

      inicioJanela++;
    }
  }
  return mediaMaxima;
};
