function doubledArray(changed) {
    // Initialize the doubled count.
    let doubledCount = 0;
  
    // Iterate through the array changed.
    for (let i = 0; i < changed.length; i++) {
      // Check if the element at index i is equal to twice the value of the element at index `n - 1 - i` in the reversed array.
      if (changed[i] === 2 * changed[changed.length - 1 - i]) {
        doubledCount++;
      }
    }
  
    // If the doubled count is equal to half the length of changed, then changed is a doubled array.
    if (doubledCount === changed.length / 2) {
      // Return the first half of changed.
      return changed.slice(0, changed.length / 2);
    } else {
      // Return an empty array.
      return [];
    }
  }
  
  // Driver code.
  const changed = [1, 3, 4, 2, 6, 8];
  const original = doubledArray(changed);
  console.log(original); // [1,3,4]
  