const add = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds -1 + -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
});
