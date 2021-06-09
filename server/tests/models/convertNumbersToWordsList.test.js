const converter = require('../../src/models/convertNumbersToWordsList');

describe('Test the convert numbers to words list module', () => {
  test('It should return array of words, according to the number passed in', () => {
    const oneNumber = '3';
    const expectedForOneNumber = ['d', 'e', 'f'];
    const twoNumbers = '89';
    const expectedForTwoNumbers = ['tw', 'uw', 'vw', 'tx', 'ux', 'vx', 'ty', 'uy', 'vy', 'tz', 'uz', 'vz'];
    // const expecterdForThreeNumbers =
    // these examples are to test that ones and zeros are not producing values
    const numberWithZerosAndOnes = '1405';
    const expectedForNumberWithZerosAndOnes = ['gj', 'hj', 'ij', 'gk', 'hk', 'ik', 'gl', 'hl', 'il'];
    const numberWithOnlyZerosAndOnes = '1011001';
    const expectedForNumberWithOnlyZerosAndOnes = [];

    expect([...converter(oneNumber)]).toEqual(expect.arrayContaining(expectedForOneNumber));

    expect([...converter(twoNumbers)]).toEqual(expect.arrayContaining(expectedForTwoNumbers));

    expect([...converter(numberWithZerosAndOnes)])
      .toEqual(expect.arrayContaining(expectedForNumberWithZerosAndOnes));

    expect([...converter(numberWithOnlyZerosAndOnes)])
      .toEqual(expect.arrayContaining(expectedForNumberWithOnlyZerosAndOnes));
  });
});
