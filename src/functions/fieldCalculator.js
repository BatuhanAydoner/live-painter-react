export const fieldCalculator = (value) => {
  if (value < 100) {
    return 100;
  } else if (value > 1500) {
    return 1500;
  } else {
    return value;
  }
};
