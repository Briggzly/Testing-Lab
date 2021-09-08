// const { expect } = require("@jest/globals");
// const { test } = require("picomatch");
// const { describe } = require("yargs");
const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract,
} = require("./functions");

test("should return 2", () => {
  expect(returnTwo()).toEqual(2);
});

test("should return hello, 'name'", () => {
  expect(greeting("James")).toEqual("Hello, James");
  expect(greeting("Jill")).toEqual("Hello, Jill");
});

describe("basic math functions", () => {
  test("should multiply num1 by num2", () => {
    expect(multiply(2, 2)).toEqual(4);
    expect(multiply(6, 2)).toEqual(12);
  }),
    test("should divide num1 by num2", () => {
      expect(divide(6, 3)).toEqual(2);
      expect(divide(20, 10)).toEqual(2);
    }),
    test("should subtract num1 by num2", () => {
      expect(subtract(4, 2)).toEqual(2);
      expect(subtract(7, 4)).toEqual(3);
    }),
    test("should add num1 and num2", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(5, 9)).toEqual(14);
      });
});
