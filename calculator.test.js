"use strict";

const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");



describe('sum', () => { 
  test('can add two small positive numbers', () => {
    const actual = sum(2, 3);
    const expected = 5;
    expect(actual).toBe(expected);
  });
  test('can add two large positive numbers', () => { 
    const actual = sum(6473245, 3968498);
    const expected = 10441743;
    expect(actual).toBe(expected);
  });
  test('can add two negative numbers', () => {
    const actual = sum(-653, -235);
    const expected = -888;
    expect(actual).toBe(expected);
  });
  test('can add zero', () => {
    const actual = sum(0, 0);
    const expected = 0;
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test("Check that it gives the difference of 2 numbers", () => {
    const actual = subtract(6987, 4536);
    const expected = 2451;
    expect(actual).toBe(expected);
  });
  test("Check that it gives the difference of 2 floats", () => {
    const actual = subtract(123.45, 65.98);
    const expected = 57.47;
    expect(actual).toBe(expected);
  });
  test("Check that it gives the difference of 2 negative numbers", () => {
    const actual = subtract(-482, -224);
    const expected = -258;
    expect(actual).toBe(expected);
  });
  test("Check that it can subtract 0", () => {
    const actual = subtract(0, 0);
    const expected = 0;
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {
  test("Check that it gives the product of 2 numbers", () => {
    const actual = multiply(34, 87);
    const expected = 2958;
    expect(actual).toBe(expected);
  });
  test("Check that it gives the product of 2 flots", () => {
    const actual = multiply(34.3, 87.45);
    const expected = 2999.535;
    expect(actual).toBe(expected);
  });
  test("Check that it gives the product of 2 negative numbers", () => {
    const actual = multiply(-84, -5);
    const expected = 420;
    expect(actual).toBe(expected);
  });  
});

describe('divide', () => {
  test("Check that it can divide 2 numbers", () => {
    const actual = divide(2296, 41);
    const expected = 56;
    expect(actual).toBe(expected);
  });
  test("Check that it can divide 2 floats", () => {
    const actual = divide(27.625, 3.25);
    const expected = 8.5;
    expect(actual).toEqual(expected);
  });
  test("Check that it can divide 2 negative numbers", () => {
    const actual = divide(-490, -98);
    const expected = 5;
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {
  test("Check that the modulus of 2 numbers is 1", () => {
    const actual = modulus(15, 2);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  test("Check that the modulus of 2 numbers is 0", () => {
    const actual = modulus(24, 2);
    const expected = 0;
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
  test("Check if 3452 is even", () => {
    const actual = even(3452)
    const expected = true;
    expect(actual).toBe(expected);
  });
  test("Check if 28371 is even", () => {
    const actual = even(28371);
    // const expected = false;
    expect(actual).toBeFalsy;
  });

});

describe('odd', () => {
  test("Check if 54725 is odd", () => {
    const actual = odd(54725);
    const expected = true;
    expect(actual).toBe(expected);
  });
  test("Check if 13493 is odd", () => {
    const actual = odd(13493);
    // const expected = true;
    expect(actual).toBeTruthy;
  });
  test("Check if 12 is odd", () => {
    const actual = odd(12);
    // const expected = false;
    expect(actual).toBeNull;
  });

});
