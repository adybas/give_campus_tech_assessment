const continuousNumbers = require('./continuousNumbers');

test('When array is [1,7,7,9], output should be 2', () => {
    expect(continuousNumbers([1,7,7,9])).toBe(2);
});

test('When array is [1,7,7,2,9,9,9], output should be 3', () => {
    expect(continuousNumbers([1,7,7,2,9,9,9])).toBe(3);
});

test('When array is empty, output should be 0', () => {
    expect(continuousNumbers([])).toBe(0);
});

test('When array has one value, output should be 1', () => {
    expect(continuousNumbers([5])).toBe(1);
});

test('When array has all different nums, output should be 1', () => {
    expect(continuousNumbers([1,2,3])).toBe(1);
});

test('When array has negative and positive nums, should output correct continuous num based on sign', () => {
    expect(continuousNumbers([1,7,-7,-7,3])).toBe(2);
});