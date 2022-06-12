export const isValidIndex = (index, max) => {
  const isInteger = Number.isInteger(index);
  const isPositive = index >= 0;

  if (isInteger && isPositive && max >= index) return true;

  return false;
};
