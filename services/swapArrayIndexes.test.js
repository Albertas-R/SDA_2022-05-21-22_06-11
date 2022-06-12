import { swapArrayIndexes } from "./swapArrayIndexes";

import * as wholeFileIsValidIndex from "./isValidIndex";

// swapArrayIndexes funkcija sukeicia skaicius vietomis arba bet ka arba grazins pradini rezultata

describe("Testing swapArrayIndexes function", () => {
  const tests = [
    {
      testName: "test 1: change first array item with fourth",
      arr: [41, -1, 0, -5, 4, 7, 99],
      i: 0,
      j: 3,
      expected: [-5, -1, 0, 41, 4, 7, 99],
    },
    {
      testName: "test 2: empty array",
      arr: [],
      i: 0,
      j: 3,
      expected: [],
    },
    {
      testName: "test 3: array with string",
      arr: [0, -4, "apple"],
      i: 1,
      j: 0,
      expected: [-4, 0, "apple"],
    },
  ];

  // 1. importuojam visa faila, kaip moduli -> import * as wholeFileIsValidIndex from "./isValidIndex";

  // 2. mockImplementation pakeiciama funkcijos implementacija ir mes liekam viduje ir nesikreipiam i isore

  // beforeEach
  // beforeAll
  // afterEach
  // afterAll

  // jest.fn
  // jest.spyOn

  // spy.mockImplementation
  // spy.mockClear
  // spy.mockRestore

  let mySpy = null;

  // pries visus testus
  beforeAll(() => {
    mySpy = jest.spyOn(wholeFileIsValidIndex, "isValidIndex"); // tik sekimui (.spyOn)

    // console.log({ mySpy });

    mySpy.mockImplementation(() => true); // pakeiciama funkcijos implementacija
  });

  // pries kiekviena testa
  beforeEach(() => {
    mySpy.mockClear(); // nuims visus musu call'us
  });

  // po visu testu
  afterAll(() => {
    mySpy.mockRestore(); // grazins originalia implementacija
  });

  tests.forEach(({ testName, arr, i, j, expected }) => {
    test(testName, () => {
      expect(swapArrayIndexes(arr, i, j)).toEqual(expected);

      expect(mySpy).toBeCalledTimes(2); // toBeCalledTimes() suskaiciuoja visus funkcijos kvietumus
    });
  });

  test("test with false value", () => {
    mySpy.mockImplementation(() => false);

    expect(swapArrayIndexes([null, "0", "", []], -1, 3)).toEqual([null, "0", "", []]);

    expect(mySpy).toBeCalledTimes(2);
  });
});
