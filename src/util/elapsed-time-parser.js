export const elapsedTimeParser = (time) => {
  const tokens = time.match(/\d+[hm]/g);
  const timeCount = { h: 0, m: 0 };
  for (const token of tokens) {
    const [amount, denom] = token.split(/(?=[hm])/);
    timeCount[denom] += +amount;
  }
  [timeCount.h, timeCount.m] = [timeCount.h + Math.floor(timeCount.m / 60), timeCount.m % 60];
  return `${timeCount.h}h${timeCount.m}m`;
};
