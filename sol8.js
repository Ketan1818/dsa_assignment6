function multiply(mat1, mat2) {
    const r1 = mat1.length;
    const c1 = mat1[0].length;
    const c2 = mat2[0].length;
    const res = new Array(r1).fill().map(() => new Array(c2).fill(0));
    const mp = new Map();
  
    for (let i = 0; i < r1; ++i) {
      for (let j = 0; j < c1; ++j) {
        if (mat1[i][j] !== 0) {
          if (!mp.has(i)) {
            mp.set(i, []);
          }
          mp.get(i).push(j);
        }
      }
    }
  
    for (let i = 0; i < r1; ++i) {
      for (let j = 0; j < c2; ++j) {
        if (mp.has(i)) {
          for (let k of mp.get(i)) {
            res[i][j] += mat1[i][k] * mat2[k][j];
          }
        }
      }
    }
  
    return res;
  }
  
  const mat1 = [
    [1, 0, 0],
    [-1, 0, 3]
  ];
  
  const mat2 = [
    [7, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
  ];
  
  const result = multiply(mat1, mat2);
  console.log(result);
  