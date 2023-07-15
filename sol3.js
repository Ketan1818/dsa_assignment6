function validMountainArray(arr) {
    if (arr.length < 3) return false;
    
    let max = Number.MIN_SAFE_INTEGER;
    let mountain = -1;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        mountain = i;
      }
    }
    
    if (mountain === 0 || mountain === arr.length - 1) return false;
  
    for (let i = 0; i < mountain; i++) {
      if (arr[i] >= arr[i + 1]) {
        return false;
      }
    }
    
    for (let j = mountain + 1; j < arr.length; j++) {
      if (arr[j] >= arr[j - 1]) {
        return false;
      }
    }
    
    return true;
  }
  
  const arr = [0, 3, 2, 1]; // Example input
  const result = validMountainArray(arr);
  console.log(result);
  