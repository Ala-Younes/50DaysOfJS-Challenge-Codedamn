const getTheGapX = (str) => {
  // write your solution here
  let charactersBetweenX = -1;
  const firstIndexOfX = str.indexOf("X");
  const lastIndexOfX = str.lastIndexOf("X");
  if (firstIndexOfX !== -1) {
    charactersBetweenX = lastIndexOfX - firstIndexOfX;
  }
  return charactersBetweenX;
};

const getTheGapX01 = (str) => {
  // write your solution here
  const firstIndexOfX = str.indexOf("X");
  if (firstIndexOfX !== -1) {
    const lastIndexOfX = str.lastIndexOf("X");
    if (lastIndexOfX === firstIndexOfX) {
      return 0;
    } else {
      const charactersBetweenX = str.slice(firstIndexOfX + 1, lastIndexOfX);
      return charactersBetweenX.length + 1;
    }
  }
  return -1;
};

console.log(`Gap between the X's: ${getTheGapX01("XeroX")}`);
console.log(`Gap between the X's: ${getTheGapX01("Xamarin")}`);
console.log(`Gap between the X's: ${getTheGapX01("JavaScript")}`);
console.log(`Gap between the X's: ${getTheGapX01("F(X) !== G(X) !== F(X)")}`);
