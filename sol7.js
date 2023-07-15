function generateMatrix(n) {
    const res = [];
    for (let i = 0; i < n; i++) {
      res.push(new Array(n).fill(0));
    }
  
    let top = 0;
    let left = 0;
    let right = n - 1;
    let bottom = n - 1;
    let a = 1;
  
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        res[top][i] = a;
        a++;
      }
      top++;
  
      for (let i = top; i <= bottom; i++) {
        res[i][right] = a;
        a++;
      }
      right--;
  
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          res[bottom][i] = a;
          a++;
        }
        bottom--;
      }
  
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          res[i][left] = a;
          a++;
        }
        left++;
      }
    }
  
    return res;
  }
  
  const n = 3; // Example input
  const matrix = generateMatrix(n);
  console.log(matrix);
  