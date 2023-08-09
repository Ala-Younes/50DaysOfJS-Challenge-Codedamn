const reverseGivenInteger = (num) => {
  const reversedInt = [...num.toString()].reverse().join("");
  return Math.sign(num) * parseInt(reversedInt);
};

console.log(`Reversed integer is: ${reverseGivenInteger(-3849)}`);
