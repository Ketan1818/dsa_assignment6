function findPermutation(s) {
    const n = s.length;
    const perm = [];
    let current = 0;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        perm.push(current);
        current++;
      } else if (s[i] === 'D') {
        perm.push(n);
        n--;
      }
    }
  
    perm.push(n !== null ? n : current);
  
    return perm;
  }
  
  const s = "IDID";
  const result = findPermutation(s);
  console.log(result);
  