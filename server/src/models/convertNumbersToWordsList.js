const NUMBERS_VALUES = {
  1: [''],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: [' '],
};

const getValuesList = (input) => input.split('').map((singleNumber) => NUMBERS_VALUES[singleNumber]);

const buildWordsList = (arraysList) => {
  if (arraysList.length === 1) {
    return arraysList[0];
  }
  const result = [];
  const allCasesOfRest = buildWordsList(arraysList.slice(1));
  for (let i = 0; i < allCasesOfRest.length; i += 1) {
    for (let j = 0; j < arraysList[0].length; j += 1) {
      result.push(arraysList[0][j] + allCasesOfRest[i]);
    }
  }
  return result;
};

module.exports = (input) => {
  const arraysList = getValuesList(input);
  return buildWordsList(arraysList);
};
