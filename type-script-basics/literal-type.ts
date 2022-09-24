function combine2(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges2 = combine2(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges2 = combine2('30', '26', 'as-number');
console.log(combinedStringAges2);

const combinedNames = combine2('Max', 'Anna', 'as-text');
console.log(combinedNames);
