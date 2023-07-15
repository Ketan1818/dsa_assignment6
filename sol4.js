function findMaxLength(nums) {
    const countMap = { 0: -1 };
    let count = 0;
    let maxLen = 0;
  
    for (let i = 0; i < nums.length; i++) {
      count += nums[i] === 0 ? -1 : 1;
  
      if (count in countMap) {
        const length = i - countMap[count];
        maxLen = Math.max(maxLen, length);
      } else {
        countMap[count] = i;
      }
    }
  
    return maxLen;
  }
  
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength);
  