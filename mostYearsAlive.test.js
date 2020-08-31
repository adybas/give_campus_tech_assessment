const mostYearsAlive = require('./mostYearsAlive');

test('[[1910, 1950], [1900, 1951], [1945, 2000]], output should be [1945, 1946, 1947, 1948, 1949, 1950]', () => {
    expect(mostYearsAlive([[1910, 1950], [1900, 1951], [1945, 2000]])).toStrictEqual([1945, 1946, 1947, 1948, 1949, 1950]);
});

test('[[1910, 1951], [1900, 1951], [1951, 2000]], output should be [1951]', () => {
    expect(mostYearsAlive([[1910, 1951], [1900, 1951], [1951, 2000]])).toStrictEqual([1951]);
});

test('[[1900, 1910], [1905, 1915], [1950, 2000]], output should be [1905, 1906, 1907, 1908, 1909, 1910]', () => {
    expect(mostYearsAlive([[1900, 1910], [1905, 1915], [1950, 2000]])).toStrictEqual([1905, 1906, 1907, 1908, 1909, 1910]);
});

test('[[1905, 1910]], output should be [1905, 1906, 1907, 1908, 1909, 1910]', () => {
    expect(mostYearsAlive([[1905, 1910]])).toStrictEqual([1905, 1906, 1907, 1908, 1909, 1910]);
});

test('When the array is empty, output should be an empty array', () => {
    expect(mostYearsAlive([])).toStrictEqual([]);
});