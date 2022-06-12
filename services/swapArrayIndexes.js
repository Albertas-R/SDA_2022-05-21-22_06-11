import { isValidIndex } from "./isValidIndex";

export const swapArrayIndexes = (arr, i, j) => {
  const result = [...arr];

  const highestIndex = result.length - 1;

  const isValidI = isValidIndex(i, highestIndex);
  const isValidJ = isValidIndex(j, highestIndex);

  if (!isValidI || !isValidJ) return result;

  const temp = result[j];
  result[j] = result[i];
  result[i] = temp;

  return result;
};
