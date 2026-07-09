function fibs(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  return result;
}

function fibsRec(n) {
  if (n === 0) {
    return [];
  }

  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  const previousNumbers = fibsRec(n - 1);
  const nextNumber =
    previousNumbers[previousNumbers.length - 1] +
    previousNumbers[previousNumbers.length - 2];

  return [...previousNumbers, nextNumber];
}

console.log(fibs(8));
console.log(fibsRec(8));
