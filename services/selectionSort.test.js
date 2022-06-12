import { selectionSort } from "./selectionSort";

// https://jestjs.io/docs/getting-started
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// selectionSort funkcija isdelioja arejuje skaicius didejancia tvarka

describe("Testing selectionSort function", () => {
  const tests = [
    {
      testName: "test 1",
      arr: [99, 0, -2, 0, 5, 40],
      expected: [-2, 0, 0, 5, 40, 99],
    },
    {
      testName: "test 2 with string",
      arr: ["4", -1, 0, -2],
      expected: [-2, -1, 0, "4"],
    },
    {
      testName: "test 3 with letters",
      arr: ["a", -1, 0, -2],
      expected: ["a", -2, -1, 0],
    },
  ];

  tests.forEach(({ testName, arr, expected }) => {
    test(testName, () => {
      expect(selectionSort(arr)).toEqual(expected);
    });
  });
});

// test("pvz", () => {
//   expect(selectionSort([99, 0, -2, 0, 5, 40])).toEqual([-2, 0, 0, 5, 40, 99, 5]);
// })
