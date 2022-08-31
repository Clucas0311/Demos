function onlyOdds(num) {
  debugger;
  let sum = 0;
  for (let i = num; i >= 1; i--) {
    if (i % 2 === 1);
    sum += i;
  }
  return sum;
}

onlyOdds(3);
