function searchMatrix(matrix, target) {
    const n = matrix.length;
    const m = matrix[0].length;
    let st = 0;
    let end = n * m - 1;
  
    while (st <= end) {
      let mid = Math.floor(st + (end - st) / 2);
      if (matrix[Math.floor(mid / m)][mid % m] === target) {
        return true;
      }
      if (matrix[Math.floor(mid / m)][mid % m] < target) {
        st = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }
  
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ];
  const target = 3;
  
  const result = searchMatrix(matrix, target);
  console.log(result);
  