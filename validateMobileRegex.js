const number = "+919876543210";

const validateMobile = (number) => {
  // write your solution here
  const regex = /^(?:(?:\+91|0)?\s?)?\d{10}$/;
  return regex.test(number);
};

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
console.log(
  `is a valid Indian mobile number: ${validateMobile("+919876543210")}`
);
console.log(
  `is a valid Indian mobile number: ${validateMobile("+91 9876543210")}`
);
console.log(
  `is a valid Indian mobile number: ${validateMobile("09876543210")}`
);
console.log(`is a valid Indian mobile number: ${validateMobile("9876543210")}`);
console.log(
  `is a valid Indian mobile number: ${validateMobile("99876543210")}`
); // false
