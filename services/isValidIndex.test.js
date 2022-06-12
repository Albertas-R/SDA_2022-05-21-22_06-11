import { isValidIndex } from "./isValidIndex";

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// isValidIndex funkcija tikrina ar tas indeksas atitinka tam tikrus reikalavimus, ar skaicius sveikas, ar ne neigianmas, ar nevirsyja max skaiciaus, ar nevirsyja masyvo ilgio

describe("Testing isValidIndex function", () => {
  const tests = [
    {
      testName: "test 1",
      index: "1",
      max: 3,
      expected: false,
    },
    {
      testName: "test 2",
      index: 3,
      max: 3,
      expected: true,
    },
    {
      testName: "test 3",
      index: -43,
      max: 50,
      expected: false,
    },
  ];

  tests.forEach(({ testName, index, max, expected }) => {
    test(testName, () => {
      expect(isValidIndex(index, max)).toEqual(expected);
    });
  });
});
