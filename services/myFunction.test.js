import { myFunction } from "./myFunction";

// export const myFunction = (arr, newItem) => {
//   arr.push(newItem);
// };

describe("Testing myFunction function", () => {
  const tests = [
    {
      testName: "test 1",
      arr: [4, 5, 0],
      newItem: "text",
      expected: [4, 5, 0, "text"],
    },
    {
      testName: "test 2",
      arr: [4, 5, 0],
      newItem: "",
      expected: [4, 5, 0, ""],
    },
  ];

  tests.forEach(({ testName, arr, newItem, expected }) => {
    test(testName, () => {
      myFunction(arr, newItem);
      expect(arr).toEqual(expected);
    });
  });
});
