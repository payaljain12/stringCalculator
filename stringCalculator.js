// Function to add numbers
function add(inputString) {
  console.log("Input is --- ", inputString);
  // If input type is not string return
  if (typeof inputString !== "string") {
    return "Invalid input provided";
  }
  let sum = 0;
  let numbers = inputString.match(/[-+]?\d*\.?\d+/g); // Regex to extract only numbers from the input
  let negativeNumbers = []; // Holds negative numbers if any
  for (let index = 0; index < numbers?.length; index++) {
    const val = parseInt(numbers[index]);
    if (val < 0) {
      negativeNumbers.push(val);
    } else if (negativeNumbers.length == 0) {
      sum += val;
    }
  }
  // Return negative numbers list if present
  if (negativeNumbers.length) {
    return `Negative numbers not allowed ${negativeNumbers}`
  }
  return sum;
}

// Test cases
console.log("Output is -- ", add(0));
console.log("Output is -- ", add(""));
console.log("Output is -- ", add("2"));
console.log("Output is -- ", add("2,3"));
console.log("Output is -- ", add("//;\n1;2"));
console.log("Output is -- ", add("-2,3"));
console.log("Output is -- ", add("-2,3, -5,9"));
