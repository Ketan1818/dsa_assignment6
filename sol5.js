function minProductSum(nums1, nums2) {
    // Sort both arrays nums1 and nums2.
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
  
    // Initialize the minimum product sum.
    let minProductSum = 0;
  
    // For each element in nums1, multiply it with the element at index `n - 1 - i` in nums2.
    for (let i = 0; i < nums1.length; i++) {
      minProductSum += nums1[i] * nums2[nums1.length - 1 - i];
    }
  
    // Return the minimum product sum.
    return minProductSum;
  }
  
  // Driver code.
  const nums1 = [5, 3, 4, 2];
  const nums2 = [4, 2, 2, 5];
  const minProductSum = minProductSum(nums1, nums2);
  console.log(minProductSum); // 40
  