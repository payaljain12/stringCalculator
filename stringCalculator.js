function add(inputString) {
    if (typeof inputString !== "string") {
        return "Invalid input provided"
    }
    let sum = 0;
    let numbers =  inputString.split(",");
    console.log(numbers);
    for (let index = 0; index < numbers.length; index++) {
        const val = parseInt(numbers[index]);
        sum +=  val
    }
    return sum;
}

console.log( add("2,3"));