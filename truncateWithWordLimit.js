const str = "JavaScript is simple";
const wordLimit = 3;

const truncateWithWordLimit = (str, wordLimit) => {
  // write your solution here
  const arrayOfWords = str.split(" ");
  return arrayOfWords.length === wordLimit
    ? str
    : arrayOfWords.splice(0, wordLimit).join(" ");
};

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`); // "JavaScript is simple"
console.log(
  truncateWithWordLimit("Codedamn is the best place to learn to code", 5)
); // "Codedamn is the best place"
