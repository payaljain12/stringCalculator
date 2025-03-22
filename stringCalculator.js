function add(inputString) {
    console.log("Input is --- ", inputString);
    if (typeof inputString !== "string") {
        return "Invalid input provided"
    }
    let sum = 0;
    let numbers = inputString.match(/[-+]?\d*\.?\d+/g)
    // console.log(numbers, inputString);
    for (let index = 0; index < numbers?.length; index++) {
        const val = parseInt(numbers[index]);
        sum +=  val
    }
    return sum;
}

console.log("Output is -- ", add(0));
console.log("Output is -- ", add(""));
console.log("Output is -- ", add("2"));
console.log("Output is -- ", add("2,3"));
console.log("Output is -- ", add("2\n5;;;;///"));
