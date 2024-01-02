function getLargestNonZeroNumber(numbers) {
    const nonZeroNumbers = numbers.filter(number => number !== 0);
    return nonZeroNumbers.length > 0 ? Math.max(...nonZeroNumbers) : 0;
}

function sumofNumbers(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

function getAverage(numbers) {
    return sumofNumbers(numbers) / numbers.length;
}

//create a function that takes an array of numbers and returns the average of all the numbers
function average(numbers) {
    return getAverage(numbers);
}
