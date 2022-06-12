import { swapArrayIndexes } from "./swapArrayIndexes";

export const selectionSort = (arr) => {
  let result = [...arr];

  for (let i = 0; i < result.length; i++) {
    let lowestIndex = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[lowestIndex]) {
        lowestIndex = j;
      }
    }

    if (lowestIndex !== i) {
      result = swapArrayIndexes(result, i, lowestIndex);
    }
  }

  return result;
};
